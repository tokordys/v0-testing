import { Wallet, PieChart, TrendingUp, Bell, Shield, Smartphone } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Wallet,
      title: "Smart Expense Tracking",
      description: "Automatically categorize and track your expenses in real-time",
    },
    {
      icon: PieChart,
      title: "Visual Analytics",
      description: "Get clear insights with beautiful charts and reports",
    },
    {
      icon: TrendingUp,
      title: "Investment Tracking",
      description: "Monitor your investments and portfolio performance",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get timely alerts for bills, budgets, and unusual spending",
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your data is protected with enterprise-grade encryption",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Access your finances anywhere with our mobile app",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Everything you need to manage your money
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our comprehensive suite of tools helps you stay on top of your finances
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 p-4 rounded-lg transition-colors hover:bg-white"
            >
              <div className="rounded-lg bg-gray-100 p-2">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

