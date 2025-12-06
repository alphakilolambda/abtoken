'use client'

import { Globe, TrendingUp, Wallet, Code, FileText, Search, Mail, BookOpen, PenTool, Database, BarChart, ArrowRight } from 'lucide-react'

const features = [
  { icon: Globe, name: '@stake', description: 'Stake tokens and earn rewards automatically' },
  { icon: TrendingUp, name: '@trade', description: 'Trade tokens across multiple DEXs' },
  { icon: Wallet, name: '@wallet', description: 'Connect and manage your wallet seamlessly' },
  { icon: Code, name: '@code', description: 'Build dApps with our developer SDK' },
  { icon: FileText, name: '@docs', description: 'Comprehensive documentation and guides' },
  { icon: Search, name: '@explore', description: 'Explore token analytics and metrics' },
  { icon: Mail, name: '@notify', description: 'Get notified about important updates' },
  { icon: BookOpen, name: '@learn', description: 'Learn about DeFi and tokenomics' },
  { icon: PenTool, name: '@customize', description: 'Customize your token experience' },
  { icon: Database, name: '@api', description: 'Access our powerful API endpoints' },
  { icon: BarChart, name: '@analytics', description: 'Track your portfolio performance' },
]

export default function TokenFeatures() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Through one token, access features that can...
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Every $AB Token comes pre-configured with these essential capabilities 
          out-of-the-box for you to customize or replace with one.
        </p>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-4 bg-gray-50 p-8 rounded-lg border border-gray-200">
          <div className="bg-black p-4 rounded-lg">
            <Wallet className="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black mb-2">
              Manage wallets, stake tokens, & earn rewards automatically
            </h3>
            <p className="text-gray-600">
              Complete token management in one place
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:border-black transition-all duration-300 cursor-pointer bg-white hover:shadow-lg"
            >
              <div className="mb-4">
                <Icon className="w-8 h-8 text-black" />
              </div>
              <div className="font-mono text-sm font-semibold text-black mb-2">
                {feature.name}
              </div>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>

      <div className="text-center">
        <button className="bg-black text-white px-8 py-4 flex items-center justify-center gap-2 mx-auto hover:bg-gray-800 transition-colors">
          Read Docs
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-sm text-gray-500 mt-4">
          The $AB Token API is built on top of production-grade blockchain infrastructure.
        </p>
      </div>
    </section>
  )
}

