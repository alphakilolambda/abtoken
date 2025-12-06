'use client'

import { useState } from 'react'
import { ArrowUpDown, TrendingUp, TrendingDown } from 'lucide-react'

export default function BuySell() {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy')
  const [amount, setAmount] = useState('')
  const [tokenAmount, setTokenAmount] = useState('')

  const handleAmountChange = (value: string) => {
    setAmount(value)
    // Simple conversion: 1 ETH = ~25,000,000 $AB (at $0.0001 per token, ETH = $2500)
    if (value && !isNaN(parseFloat(value))) {
      const tokens = (parseFloat(value) * 25000000).toFixed(2)
      setTokenAmount(tokens)
    } else {
      setTokenAmount('')
    }
  }

  const handleTokenAmountChange = (value: string) => {
    setTokenAmount(value)
    // Reverse conversion
    if (value && !isNaN(parseFloat(value))) {
      const eth = (parseFloat(value) / 25000000).toFixed(8)
      setAmount(eth)
    } else {
      setAmount('')
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Buy & Sell $AB Token
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Trade $AB tokens instantly. Connect your wallet and start trading in seconds.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('buy')}
              className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                activeTab === 'buy'
                  ? 'bg-black text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Buy $AB
              </div>
            </button>
            <button
              onClick={() => setActiveTab('sell')}
              className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                activeTab === 'sell'
                  ? 'bg-black text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <TrendingDown className="w-5 h-5" />
                Sell $AB
              </div>
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                You {activeTab === 'buy' ? 'Pay' : 'Receive'}
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => handleAmountChange(e.target.value)}
                  placeholder="0.0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-2xl"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <span className="text-gray-600 font-semibold">ETH</span>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                ≈ ${amount ? (parseFloat(amount) * 2500).toFixed(2) : '0.00'} USD
              </div>
            </div>

            <div className="flex justify-center my-4">
              <div className="bg-gray-100 rounded-full p-2">
                <ArrowUpDown className="w-5 h-5 text-gray-600" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                You {activeTab === 'buy' ? 'Receive' : 'Pay'}
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={tokenAmount}
                  onChange={(e) => handleTokenAmountChange(e.target.value)}
                  placeholder="0.0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-2xl"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <span className="text-gray-600 font-semibold">$AB</span>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                ≈ ${tokenAmount ? (parseFloat(tokenAmount) * 0.0001).toFixed(2) : '0.00'} USD
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Price per $AB</span>
                <span className="font-semibold text-black">$0.0001</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Slippage Tolerance</span>
                <span className="font-semibold text-black">0.5%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Network Fee</span>
                <span className="font-semibold text-black">~0.001 ETH</span>
              </div>
            </div>

            <button
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
                activeTab === 'buy'
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              {activeTab === 'buy' ? 'Buy $AB Tokens' : 'Sell $AB Tokens'}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By trading, you agree to our Terms of Service. Always verify the contract address.
            </p>
          </div>
        </div>

        {/* Price Info */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
            <div className="text-sm text-gray-600 mb-1">24h High</div>
            <div className="text-lg font-bold text-black">$0.00012</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
            <div className="text-sm text-gray-600 mb-1">Current Price</div>
            <div className="text-lg font-bold text-green-600">$0.0001</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
            <div className="text-sm text-gray-600 mb-1">24h Low</div>
            <div className="text-lg font-bold text-black">$0.00008</div>
          </div>
        </div>
      </div>
    </section>
  )
}

