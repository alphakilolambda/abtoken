import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.svg" 
                alt="$AB Token Logo" 
                width={24} 
                height={24}
                className="w-6 h-6"
              />
              <h3 className="text-xl font-bold text-black">$AB TOKEN</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Build, deploy, and earn with $AB Token.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-black mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-gray-600 hover:text-black">Features</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-black">Pricing</Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-600 hover:text-black">Docs</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-black">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black">About</Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-black">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-black">Terms</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-black">Privacy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 $AB Token. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://x.com/Agentbaseai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

