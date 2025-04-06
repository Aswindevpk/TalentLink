import AppRoutes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      {/* <AppRoutes /> */}
      <Footer />
    </>
  );
}

export default App;
