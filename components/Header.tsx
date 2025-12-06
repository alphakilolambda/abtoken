'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="/logo.svg" 
                alt="$AB Token Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/#features" className="text-gray-700 hover:text-black transition-colors">
              Features
            </Link>
            <Link href="/#staking" className="text-gray-700 hover:text-black transition-colors">
              Staking
            </Link>
            <Link href="/#tokenomics" className="text-gray-700 hover:text-black transition-colors">
              Tokenomics
            </Link>
            <Link href="/docs" className="text-gray-700 hover:text-black transition-colors">
              Docs
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-black transition-colors">
              Pricing
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/#features" className="block text-gray-700 hover:text-black">Features</Link>
            <Link href="/#staking" className="block text-gray-700 hover:text-black">Staking</Link>
            <Link href="/#tokenomics" className="block text-gray-700 hover:text-black">Tokenomics</Link>
            <Link href="/docs" className="block text-gray-700 hover:text-black">Docs</Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-black">Pricing</Link>
          </div>
        )}
      </div>
    </header>
  )
}

