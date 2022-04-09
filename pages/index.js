import Head from "next/head";
import Image from "next/image";

import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>berlianto</title>
        <meta name="keyword" content="Portfolio, resume" />
        <meta
          name="description"
          content="Hello there this is my 4th portfolio that I create after not been coding for a while"
        />
        <meta name="author" content="Berlianto Ferdynand Pongbubun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <main className="main">
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
