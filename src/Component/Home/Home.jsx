import AnyHelp from "./AnyHelp";
import Banner from "./Banner";

import HomeCamp from "./HomeCamp";
import NavBar from "./Navbar";
import ReadyToHEalp from "./ReadyToHEalp";
import ShowUpComing from "./ShowUpComing";
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
      <ShowUpComing></ShowUpComing>
    </div>
  );
};

export default Home;
