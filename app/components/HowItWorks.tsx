import Image from "next/image"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Accounts",
      description: "Securely link your bank accounts and credit cards with bank-level encryption",
    },
    {
      number: "02",
      title: "Set Your Goals",
      description: "Define your financial goals and create budgets to help you achieve them",
    },
    {
      number: "03",
      title: "Track Progress",
      description: "Monitor your progress with real-time updates and detailed analytics",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get started in minutes</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Three simple steps to take control of your finances
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center space-y-4">
              <div className="text-4xl font-bold text-gray-200">{step.number}</div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-center text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-xl border bg-gray-50 p-4">
          <Image
            alt="App interface"
            className="aspect-[2/1] overflow-hidden rounded-xl object-cover object-center"
            height="600"
            src="/placeholder.svg"
            width="1200"
          />
        </div>
      </div>
    </section>
  )
}

