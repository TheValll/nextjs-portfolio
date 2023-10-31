import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";

export default function Home() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <Navbar />
      <Presentation />
    </div>
  );
}
