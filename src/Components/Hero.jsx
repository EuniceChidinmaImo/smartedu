function Hero() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Personalized Tuition That Helps Your Child Succeed
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Online & in-centre tuition powered by proven learning technology.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="bg-accent text-primary px-6 py-3 rounded-md font-semibold">
              Book a Free Assessment
            </button>
            <button className="border border-white px-6 py-3 rounded-md">
              Explore Our Learning Platform
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="bg-white/10 rounded-lg h-64" />
          {/* placeholder for image/video */}
        </div>
      </div>
    </section>
  );
}
export default Hero;
