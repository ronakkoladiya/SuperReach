import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="main">
        <header>
          <NavBar />
          <Section1 />
        </header>
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </main>
    </>
  );
}

export default App;
