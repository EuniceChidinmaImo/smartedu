const features = [
  "Personalized learning plans",
  "Online & in-centre tuition",
  "Real-time progress tracking",
  "Exam-focused preparation",
  "Affordable, flexible support",
];

 function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {features.map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;
