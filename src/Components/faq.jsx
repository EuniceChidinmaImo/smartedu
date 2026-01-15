import { faqs } from "../Data/faqs";
import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">FAQs</h2>

        <div className="mt-10 space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border rounded-lg">
              <button
                className="w-full text-left p-4 font-medium flex justify-between"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.question}
                <span>{open === i ? "-" : "+"}</span>
              </button>

              {open === i && (
                <p className="p-4 pt-0 text-gray-600">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
