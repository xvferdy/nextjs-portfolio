import Head from "next/head";

// components
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Quotes from "../components/Quotes";

// react-intersection-observer
import { useInView } from "react-intersection-observer";

export default function Home({ myData }) {
  const { ref: headerRef, inView: headerActive } = useInView();
  const { ref: aboutRef, inView: aboutActive } = useInView();
  const { ref: experienceRef, inView: experienceActive } = useInView();
  const { ref: portfolioRef, inView: portfolioActive } = useInView();
  const { ref: contactRef, inView: contactActive } = useInView();

  return (
    <>
      <Head>
        <title>Berlianto</title>
        <meta name="keyword" content="Portfolio, resume" />
        <meta
          name="description"
          content="Hello there, this is my 4th portfolio that I create after not been coding for a while"
        />
        <meta name="author" content="Berlianto Ferdynand Pongbubun" />
        <link rel="icon" href="/favicon-me.ico" />
      </Head>

      <Header headerRef={headerRef} />
      <Nav
        aboutActive={aboutActive}
        experienceActive={experienceActive}
        headerActive={headerActive}
        portfolioActive={portfolioActive}
        contactActive={contactActive}
      />
      <main className="main">
        <About aboutRef={aboutRef} />
        <Experience experienceRef={experienceRef} />
        <Services />
        <Portfolio portfolioRef={portfolioRef} />
        <Quotes />
        <Contact {...myData} contactRef={contactRef} />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const myData = {
    serviceId: process.env.SERVICE_ID,
    templateId: process.env.TEMPLATE_ID,
    userId: process.env.USER_ID,
  };
  return {
    props: {
      myData: myData,
    },
  };
};
