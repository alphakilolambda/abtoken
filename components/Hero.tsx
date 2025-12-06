'use client'

import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            The token to build, deploy, and earn.
          </h1>
          <div className="mb-8">
            <div className="inline-block bg-black text-white px-6 py-3 mb-6">
              <span className="text-sm font-semibold">ONE TOKEN. ANY CHAIN.</span>
            </div>
          </div>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Don't waste time building your own token infrastructure. $AB Token gives you 
            staking, trading, rewards, and more - all in one powerful token.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white px-8 py-4 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
              Start Building
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-black text-black px-8 py-4 flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors">
              View Docs
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="relative animate-slide-up">
          <div className="bg-gray-100 p-8 rounded-lg border border-gray-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Token Price</span>
                <span className="text-2xl font-bold text-black">$0.0001</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">FDV</span>
                <span className="text-xl font-semibold text-black">100K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Supply</span>
                <span className="text-xl font-semibold text-black">1B $AB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-black mb-4">Deploy your first stake.</h2>
        <p className="text-gray-700 mb-6">One command. 30 seconds. Staking ready.</p>
        <div className="flex gap-2 mb-4">
          <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors">
            npm install
          </button>
          <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors">
            pip install
          </button>
        </div>
        <div className="bg-black text-white p-6 rounded font-mono text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400">$</span>
            <span>npx ab-token stake@latest connect</span>
            <span className="text-gray-400">your@wallet.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}

