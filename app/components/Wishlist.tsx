import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Wishlist() {
  return (
    <section id="wishlist" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800 dark:text-gray-100">
              Join the Wishlist
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Be the first to know when FinanceApp launches. Sign up for exclusive early access and updates.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit" className="w-full">
                Join Wishlist
              </Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

