import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./hero/Hero";
import About from "./about/About";
import Project from "./project/Project";
import Contract from "./contract/Contract";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contract/>
      <Footer/>
    </div>
  );
}
