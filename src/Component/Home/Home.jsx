import Banner from "./Banner";
import HomeCamp from "./HomeCamp";
import NavBar from "./Navbar";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <HomeCamp></HomeCamp>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
