import React from "react";
import { loadMoreItems } from "@/store/reducers/items";
import { END } from "redux-saga";
import { wrapper } from "@/store";
import { loadCategories } from "@/store/reducers/categories";
import CategoriesList from "@/components/categories/CategoriesList";
import ItemsHeader from "@/components/items/ItemsHeader/ItemsHeader";
import ItemsList from "@/components/items/ItemsList/ItemsList";
import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const slug = params.slug.toString();
      const page = parseInt(slug.match(/\d+/));
      store.dispatch(loadCategories());
      store.dispatch(loadMoreItems(slug));
      store.dispatch(END);
      await store.sagaTask.toPromise();

      const { categories, items } = store.getState();

      const countOfPages = Math.ceil(items.count / items.PER_PAGE);

      return {
        props: {
          categories: categories.categories,
          items: items.items,
          page: page,
          countOfPages: countOfPages,
        },
      };
    },
);

const Page = ({ categories, items, countOfPages, page }) => {
  const router = useRouter();
  const sort = useSelector((state) => state.items.sort);
  const redirect = (event, value) => {
    router.push(`${sort === "" ? "" : `ordering=${sort}&`}page=${value}`);
  };

  return (
    <>
      <CategoriesList categories={categories} />
      <ItemsHeader />
      <ItemsList items={items} />
      <Pagination
        style={{ padding: "2rem 0" }}
        count={countOfPages}
        onChange={redirect}
        page={page}
      />
    </>
  );
};

export default Page;
