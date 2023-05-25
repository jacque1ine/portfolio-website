import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:px-20">
      <Head>
        <title>Jacqueline Fung</title>
        <meta
          name="description"
          content="I’m a software developer and systems design engineering student with the mission to build impactful tech"
        />
        <link rel="icon" href="/logo3.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
