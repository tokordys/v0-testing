import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "This app has completely transformed how I manage my finances. The insights are incredibly valuable.",
      author: "Sarah Johnson",
      title: "Small Business Owner",
    },
    {
      quote: "The best financial management tool I've ever used. Simple yet powerful.",
      author: "Michael Chen",
      title: "Software Engineer",
    },
    {
      quote: "Finally, an app that makes budgeting and expense tracking actually enjoyable!",
      author: "Emily Rodriguez",
      title: "Marketing Director",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Loved by thousands</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what our users have to say about their experience
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-lg">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image alt={testimonial.author} className="object-cover" fill src="/placeholder.svg" />
              </div>
              <p className="text-center text-gray-500">{testimonial.quote}</p>
              <div>
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

