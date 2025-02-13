import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  Updates
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-gray-500">© {new Date().getFullYear()} FinanceApp. All rights reserved.</div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                Twitter
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

