import Head from 'next/head';
import Navbar from './component/Navbar';
import Image from 'next/image';

const Index = ({ data }) => {
  return (
    <>
      <Head>
        <title>About | Belajar Next JS</title>
        <meta name="description" content="Belajar Next JS" />
      </Head>
      <Navbar />
      <Image src="/next.svg" alt="Logo Next JS" width={100} height={100} />
      <h1>Ini Halaman About</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};