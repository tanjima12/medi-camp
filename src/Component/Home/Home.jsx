import AnyHelp from "./AnyHelp";
import Banner from "./Banner";

import HomeCamp from "./HomeCamp";
import NavBar from "./Navbar";
import ReadyToHEalp from "./ReadyToHEalp";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>

      <Banner></Banner>
      <ReadyToHEalp></ReadyToHEalp>
      <HomeCamp></HomeCamp>
      <Testimonials></Testimonials>
      <AnyHelp></AnyHelp>
    </div>
  );
};

export default Home;
