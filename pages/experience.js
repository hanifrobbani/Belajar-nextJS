import Navbar from "./component/Navbar";
import Head from "next/head";
import Image from "next/image";

const About = ({ data }) => {
    return ( 
    <>
        <Head>
            <title>About | Belajar Next JS</title>
            <meta name="description" content="About | Belajar Next JS "/>
        </Head>
        <Navbar />
        <Image src="/next.svg" alt="Logo Next JS" width={300} height={200} />
        <h1>Ini Halaman Experience</h1>  
        {data.map((item) => (
            <div key={item.id}>
                <p>{item.name}</p>
            </div>
        )
        )}
    </>
    )
}

export default About;   

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props:{
            data,
        }
    }
}