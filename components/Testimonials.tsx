'use client'

const testimonials = [
  {
    quote: "$AB Token looks great, I don't see the limits!",
    author: 'Matt Davis',
    role: 'Full Stack Developer',
  },
  {
    quote: "I'm simply blown away now that I've tried it!",
    author: 'Alex Chen',
    role: 'Machine Learning Engineer',
  },
  {
    quote: '$AB Token is amazing. Big props to you guys because the setup and scaling is super easy!',
    author: 'Ben Lee',
    role: 'CTO',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What developers are saying
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Real feedback from developers building with $AB Token.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.986zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-black">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

