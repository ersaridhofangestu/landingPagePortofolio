import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About/About";
import Demo from "./pages/demo/Demo";
import Testimonial from "./pages/testimonial/Testimonial";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero/>
        <About/>
        <Testimonial/>
        <Demo/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
