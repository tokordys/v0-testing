export default function Stats() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl font-bold md:text-4xl">100K+</div>
            <div className="text-sm text-gray-500 md:text-base">Active Users</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl font-bold md:text-4xl">$1B+</div>
            <div className="text-sm text-gray-500 md:text-base">Money Tracked</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl font-bold md:text-4xl">98%</div>
            <div className="text-sm text-gray-500 md:text-base">Satisfaction Rate</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl font-bold md:text-4xl">24/7</div>
            <div className="text-sm text-gray-500 md:text-base">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

