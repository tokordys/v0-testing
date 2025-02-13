import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Cta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to take control of your finances?</h2>
            <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
              Join thousands of users who are already managing their money smarter
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1 bg-gray-800 border-gray-700"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit">Get Started</Button>
            </form>
            <p className="text-xs text-gray-400">14-day free trial. No credit card required.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

