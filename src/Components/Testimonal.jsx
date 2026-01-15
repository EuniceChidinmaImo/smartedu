import { testimonials } from "../Data/testimonal";

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          What Parents Are Saying
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {testimonials.map((item, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <p className="italic">“{item.quote}”</p>
              <p className="mt-4 font-semibold">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
