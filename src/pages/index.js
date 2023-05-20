import CategoriesList from "@/components/categories/CategoriesList";
import { wrapper } from "@/store";
import { END } from "redux-saga";
import { loadCategories } from "@/store/reducers/categories";
import ItemsHeader from "@/components/items/ItemsHeader/ItemsHeader";
import ItemsList from "@/components/items/ItemsList/ItemsList";
import { loadItems } from "@/store/reducers/items";
import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(loadCategories());
  store.dispatch(loadItems());
  store.dispatch(END);
  await store.sagaTask.toPromise();

  const { categories, items } = store.getState();
  const countOfPages = Math.ceil(items.count / items.PER_PAGE);

  return {
    props: {
      categories: categories.categories,
      items: items.items,
      countOfPages: countOfPages,
    },
    revalidate: 600,
  };
});

const Home = ({ categories, items, countOfPages }) => {
  const sortingItems = useSelector((state) => state.items.items);
  const sort = useSelector((state) => state.items.sort);

  const router = useRouter();
  const redirect = (event, value) => {
    router.push(`${sort === "" ? "" : `ordering=${sort}&`}page=${value}`);
  };

  return (
    <>
      <CategoriesList categories={categories} />
      <ItemsHeader />
      <ItemsList items={sort === "" ? items : sortingItems} />
      <Pagination
        page={1}
        style={{ padding: "2rem 0" }}
        count={countOfPages}
        onChange={redirect}
      />
    </>
  );
};

export default Home;
