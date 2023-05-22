import CategoriesList from "@/components/categories/CategoriesList";
import { wrapper } from "@/store";
import { END } from "redux-saga";
import { loadCategories } from "@/store/reducers/categories";
import ItemsHeader from "@/components/items/ItemsHeader/ItemsHeader";
import ItemsList from "@/components/items/ItemsList/ItemsList";
import { SET_NEW_PAGE, loadItems } from "@/store/reducers/items";
import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import AuthPopup from "@/components/auth/AuthPopup";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(loadCategories());
    store.dispatch(loadItems(context.query));
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
    };
  },
);

const Home = ({ categories, items, countOfPages }) => {
  const ordering = useSelector((state) => state.items.ordering);
  const currentPage = useSelector((state) => state.items.currentPage);
  const dispatch = useDispatch();
  const router = useRouter();

  const redirect = async (event, value) => {
    dispatch(SET_NEW_PAGE(value));
    await router.push({
      pathname: "/",
      query: {
        ordering: ordering,
        page: value,
      },
    });
  };

  return (
    <>
      <CategoriesList categories={categories} />
      <ItemsHeader />
      <ItemsList items={items} />
      <Pagination
        page={currentPage}
        style={{ padding: "2rem 0" }}
        count={countOfPages}
        onChange={redirect}
      />
    </>
  );
};

export default Home;
