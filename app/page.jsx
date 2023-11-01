import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <link rel="icon" href="/assets/img/favicon.png" />
      <Navbar />
      <Presentation />
      <About />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
