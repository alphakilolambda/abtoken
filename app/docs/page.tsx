import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section id="docs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Documentation
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Get started with $AB Token in minutes. Complete guides and API reference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">Quick Start</h3>
            <p className="text-gray-600 mb-6">
              Get your first agent running in 2 minutes
            </p>
            <div className="bg-black text-white p-4 rounded font-mono text-sm mb-4">
              npm create agentbase@latest
            </div>
            <Link href="#quickstart" className="text-black font-semibold hover:underline">
              Read Quick Start Guide →
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">API Reference</h3>
            <p className="text-gray-600 mb-6">
              Complete API documentation and endpoints
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• REST API</li>
              <li>• React SDK</li>
              <li>• TypeScript SDK</li>
              <li>• Python SDK</li>
            </ul>
            <Link href="#api" className="text-black font-semibold hover:underline">
              View API Reference →
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">Guides</h3>
            <p className="text-gray-600 mb-6">
              Step-by-step tutorials and best practices
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Building Your First Agent</li>
              <li>• Staking Tokens</li>
              <li>• Trading & Rewards</li>
              <li>• Advanced Features</li>
            </ul>
            <Link href="#guides" className="text-black font-semibold hover:underline">
              Browse Guides →
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">Examples</h3>
            <p className="text-gray-600 mb-6">
              Real-world examples and code samples
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Browser Automation</li>
              <li>• Research Agents</li>
              <li>• Voice Interfaces</li>
              <li>• AI-Driven Software</li>
            </ul>
            <Link href="#examples" className="text-black font-semibold hover:underline">
              View Examples →
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

