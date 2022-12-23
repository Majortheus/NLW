import { NextPage } from "next";

type HomeProps = {
  count: number;
};

const Home: NextPage<HomeProps> = ({ count }: HomeProps) => {
  return <h1>Contagem: {count}</h1>;
};

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3334/pools/count");
  const data = await response.json();

  return {
    props: data,
  };
};

export default Home;
