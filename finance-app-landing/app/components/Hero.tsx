import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Beta Access Available</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Smart Finance Management for Everyone
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Take control of your finances with our intuitive app. Track expenses, set budgets, and achieve your
                financial goals.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Get Started</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Try it free for 14 days. No credit card required.
              </p>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center">
            <div className="rounded-xl border bg-white p-8 shadow-lg">
              <Image
                alt="App screenshot"
                className="aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

