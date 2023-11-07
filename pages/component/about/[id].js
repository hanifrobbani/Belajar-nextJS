export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
  
    const paths = data.map((item) => ({
      params: { id: item.id.toString() },
    }));
  
    return { paths, fallback: false };
  }
  
  export const getStaticProps = async (context) => {
    const { params } = context;
    const id = parseInt(params.id);
  
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
  
    return {
      props: {
          user: data,
      }
    };
  };
  
  const DetailUser = ({ user }) => {
      return(
          <>
          <h1>{ user.name }</h1>
          <h2>{ user.phone }</h2>
          <h3>{ user.email }</h3>
          </>
      )
  }
  
  export default DetailUser;