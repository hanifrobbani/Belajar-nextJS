
import Image from "next/image";
import Navbar from "./component/Navbar";


export default function Home(){
  return(
    <>
      <Navbar />
      <Image src="/next.svg" alt="Logo Next" width={200} height={200}></Image>
      <h3>Halaman Home</h3>
    </>
  );
};
