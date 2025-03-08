import Helmet from "../component/Helmet";

function AboutUs() {
  return (
    <div>
      <Helmet title="about us">
        <div className="py-35 bg-slate-500 bg-gradient-to-b from-black/15 to-black/50  w-full text-center text-white px-4">
          <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
            About Us
          </h2>
        </div>
        <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Us
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Welcome to <span className="font-semibold">The Wild Blog</span>,
              your go-to space for stories, insights, and adventures from the
              untamed world. We are passionate about nature, wildlife, and
              everything in between, bringing you content that inspires,
              educates, and connects you with the wonders of the wild.
            </p>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mt-4">
              Our mission is to celebrate the beauty of nature while raising
              awareness about conservation. Whether it's breathtaking
              landscapes, wildlife encounters, or environmental issues, we
              strive to bring you engaging articles that make a difference.
            </p>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mt-4">
              Join us on this journey to explore, learn, and appreciate the wild
              like never before. Let's make the world a better place—one story
              at a time.
            </p>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mt-4">
              At <span className="font-semibold">The Wild Blog</span>, we
              believe that storytelling has the power to inspire change. Through
              our carefully curated articles, we aim to foster a deeper
              connection with nature, encouraging our readers to embrace
              sustainable living and responsible travel.
            </p>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mt-4">
              Whether you're an adventurer seeking travel guides, a
              conservationist looking for insights, or simply a nature lover
              wanting to immerse yourself in the wild, we have something for
              you. Our team of passionate writers and explorers work tirelessly
              to bring you authentic, informative, and thought-provoking
              content.
            </p>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mt-4">
              Thank you for being a part of our community. Let's explore the
              beauty of the wild together, share knowledge, and make an impact
              that lasts for generations to come.
            </p>
          </div>
        </section>
      </Helmet>
    </div>
  );
}

export default AboutUs;
