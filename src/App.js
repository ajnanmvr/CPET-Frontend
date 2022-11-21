import Header from "./components/Header/Header";
import ProgramTypes from "./components/ProgramTypes/ProgramTypes";
import SlideShow from "./components/SlideShow/SlideShow";
import Updates from "./components/Updates/Updates";
import FeaturedPrograms from "./components/FeaturedPrograms/FeaturedPrograms";
import About from "./components/About/About";
import Counters from "./components/Counters/Counters";
import EndCourses from "./components/EndCourses/EndCourses";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SlideShow />
      <Updates />
      <ProgramTypes />
      <FeaturedPrograms />
      <About/>
      <Counters />
      <EndCourses/>
      <Footer />
    </div>
  );
}

export default App;
