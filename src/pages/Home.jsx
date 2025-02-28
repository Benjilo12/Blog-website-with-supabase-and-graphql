import Hero from "../component/Hero";

import Blogs from "./Blogs";

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Blogs />
    </div>
  );
}

export default Home;
