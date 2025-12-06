'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const tokenomicsData = [
  { name: 'Liquidity Pool', value: 20, color: '#22c55e' },
  { name: 'Automated Capital Formation', value: 25, color: '#3b82f6' },
  { name: 'Team', value: 25, color: '#8b5cf6' },
  { name: 'Team Initial Buy - Early Investors', value: 10, color: '#f59e0b' },
  { name: 'Team Initial Buy - Development', value: 10, color: '#ef4444' },
  { name: 'Team Initial Buy - AgentBase Users', value: 5, color: '#ec4899' },
  { name: 'Virtuals Ecosystem Airdrop', value: 3, color: '#10b981' },
  { name: 'veVIRTUAL Airdrop', value: 2, color: '#6366f1' },
]

const allocationDetails = [
  { 
    label: 'Liquidity Pool', 
    amount: '200M $AB', 
    percentage: '20%', 
    color: '#22c55e',
    description: 'Fixed Supply'
  },
  { 
    label: 'Automated Capital Formation', 
    amount: '250M $AB', 
    percentage: '25%', 
    color: '#3b82f6',
    description: 'Follows Limit Order Program from 2mn to 160mn FDV'
  },
  { 
    label: 'Team Initial Buy - Early Investors', 
    amount: '100M $AB', 
    percentage: '10%', 
    color: '#f59e0b'
  },
  { 
    label: 'Team Initial Buy - Development', 
    amount: '100M $AB', 
    percentage: '10%', 
    color: '#ef4444'
  },
  { 
    label: 'Team Initial Buy - Airdrop for AgentBase Users', 
    amount: '50M $AB', 
    percentage: '5%', 
    color: '#ec4899'
  },
  { 
    label: 'Virtuals Ecosystem Airdrop', 
    amount: '30M $AB', 
    percentage: '3%', 
    color: '#10b981',
    description: 'Fixed Supply'
  },
  { 
    label: 'veVIRTUAL Airdrop', 
    amount: '20M $AB', 
    percentage: '2%', 
    color: '#6366f1',
    description: 'Fixed Supply'
  },
  { 
    label: 'Team', 
    amount: '250M $AB', 
    percentage: '25%', 
    color: '#8b5cf6'
  },
]

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Tokenomics
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Transparent token distribution and allocation strategy for sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-black mb-6">Total Supply</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Supply</span>
                  <span className="text-2xl font-bold text-black">1,000,000,000 $AB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Circulating Supply</span>
                  <span className="text-xl font-semibold text-black">350,000,000 $AB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Release Price</span>
                  <span className="text-xl font-semibold text-black">$0.0001</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">FDV</span>
                  <span className="text-xl font-semibold text-black">100K</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {allocationDetails.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-black">{item.label}</h4>
                      {item.description && (
                        <p className="text-sm text-gray-600">{item.description}</p>
                      )}
                      {item.lockPeriod && (
                        <p className="text-sm text-gray-600">{item.lockPeriod}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-black">{item.amount}</div>
                      <div className="text-sm text-gray-600">{item.percentage}</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: item.percentage,
                        backgroundColor: item.color || '#000000',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Distribution</h3>
            <div className="w-full h-96 p-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 10, right: 10, bottom: 60, left: 10 }}>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="45%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number, name: string) => [`${value}%`, name]}
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      padding: '8px 12px'
                    }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={80}
                    formatter={(value: string) => <span style={{ fontSize: '11px' }}>{value}</span>}
                    wrapperStyle={{ paddingTop: '10px' }}
                    iconType="circle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

