import CategoriesList from "@/components/categories/CategoriesList";
import { wrapper } from "@/store";
import { END } from "redux-saga";
import { loadCategories } from "@/store/reducers/categories";

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(loadCategories());
  store.dispatch(END);
  await store.sagaTask.toPromise();

  const { categories } = store.getState();

  return {
    props: {
      data: categories,
    },
    revalidate: 600,
  };
});

const Home = ({ data }) => {
  return (
    <>
      <CategoriesList data={data} />
    </>
  );
};

export default Home;
