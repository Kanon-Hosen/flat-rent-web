import  Navbar  from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>


      <Head>



  <title>Tenord</title>

  <meta name="description" content="Tenord is a simple and fast web application for buying and selling flats in Dhaka for rent." />

  {/* Correct way to set the favicon */}
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />


</Head>

    




      <Navbar />



      



    </>
  );
}
