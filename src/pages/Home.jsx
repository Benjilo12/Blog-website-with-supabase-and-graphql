import Helmet from "../component/Helmet";
import Hero from "../component/Hero";

import Blogs from "./Blogs";

function Home() {
  return (
    <div className="overflow-hidden">
      <Helmet title="Home">
        <Hero />
        <Blogs />
      </Helmet>
    </div>
  );
}

export default Home;
