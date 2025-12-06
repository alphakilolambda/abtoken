'use client'

import { TrendingUp, Lock, Clock, Zap } from 'lucide-react'

const stakingPools = [
  {
    name: 'Flexible Staking',
    apy: '12.5%',
    minStake: '100 $AB',
    lockPeriod: 'No lock',
    icon: Zap,
    color: 'bg-green-100',
  },
  {
    name: '30 Day Lock',
    apy: '18.0%',
    minStake: '500 $AB',
    lockPeriod: '30 days',
    icon: Lock,
    color: 'bg-blue-100',
  },
  {
    name: '90 Day Lock',
    apy: '25.0%',
    minStake: '1000 $AB',
    lockPeriod: '90 days',
    icon: Clock,
    color: 'bg-purple-100',
  },
  {
    name: '180 Day Lock',
    apy: '35.0%',
    minStake: '5000 $AB',
    lockPeriod: '180 days',
    icon: TrendingUp,
    color: 'bg-orange-100',
  },
]

export default function StakingSection() {
  return (
    <section id="staking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Stake and earn rewards
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Choose from multiple staking pools with competitive APY rates. 
          The longer you stake, the more you earn.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stakingPools.map((pool, index) => {
          const Icon = pool.icon
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-all duration-300 hover:shadow-lg"
            >
              <div className={`${pool.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{pool.name}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-black">{pool.apy}</span>
                  <span className="text-sm text-gray-600">APY</span>
                </div>
                <div className="text-sm text-gray-600">
                  Min: {pool.minStake}
                </div>
                <div className="text-sm text-gray-600">
                  Lock: {pool.lockPeriod}
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                Stake Now
              </button>
            </div>
          )
        })}
      </div>

      <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-black mb-2">NO MAINTENANCE</h3>
            <p className="text-gray-700 mb-4">Serverless by Design.</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                No infrastructure to manage
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                No servers to provision
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                No dependencies to install
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                No scaling to worry about
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black mb-2">FASTER TIME TO MARKET</h3>
            <p className="text-gray-700 mb-4">Ship in Minutes, Not Months.</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Pre-built staking pools
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Pre-configured rewards
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Pre-integrated wallets
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Pre-built analytics
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">AGENT INCLUDED</div>
              <div className="text-4xl font-bold text-black mb-2">MODELS INCLUDED</div>
              <div className="text-4xl font-bold text-black">ENVIRONMENT INCLUDED</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
          Start Staking
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

