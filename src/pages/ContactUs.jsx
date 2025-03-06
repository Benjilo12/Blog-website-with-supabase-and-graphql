function ContactUs() {
  return (
    <div>
      <div className="py-35 bg-slate-500 bg-gradient-to-b from-black/15 to-black/50  w-full text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Contact Us
        </h2>
      </div>
      <section className="bg-gray-100 py-16 px-6 md:px-12 h-screen lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Have questions, suggestions, or just want to say hello? We'd love to
            hear from you! Reach out to us through the following channels:
          </p>

          <div className="mt-8 text-left">
            <p className="text-gray-700 text-lg md:text-xl font-semibold">
              Email:
            </p>
            <p className="text-gray-600 text-lg">contact@thewildblog.com</p>
          </div>

          <div className="mt-4 text-left">
            <p className="text-gray-700 text-lg md:text-xl font-semibold">
              Phone:
            </p>
            <p className="text-gray-600 text-lg">+1 (123) 456-7890</p>
          </div>

          <div className="mt-4 text-left">
            <p className="text-gray-700 text-lg md:text-xl font-semibold">
              Address:
            </p>
            <p className="text-gray-600 text-lg">
              123 Wild Avenue, Nature City, Earth 56789
            </p>
          </div>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mt-6">
            Follow us on our social media channels to stay updated with the
            latest stories and adventures. Let's connect and share the beauty of
            the wild!
          </p>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
