import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Pricing
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Simple, transparent pricing. Pay only for what you use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">Flash Mode</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-black">$0.0075</span>
              <span className="text-gray-600"> per step</span>
            </div>
            <p className="text-gray-600 mb-6">
              Perfect for simple tasks and quick operations
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Fast execution</li>
              <li>• Basic capabilities</li>
              <li>• Cost-effective</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-black">
            <div className="bg-black text-white px-3 py-1 text-sm font-semibold inline-block mb-4">
              RECOMMENDED
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Base Mode</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-black">$0.025</span>
              <span className="text-gray-600"> per step</span>
            </div>
            <p className="text-gray-600 mb-6">
              Ideal for most production workloads
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Balanced performance</li>
              <li>• Full feature access</li>
              <li>• Production ready</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">Max Mode</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-black">$0.05</span>
              <span className="text-gray-600"> per step</span>
            </div>
            <p className="text-gray-600 mb-6">
              For complex tasks requiring maximum capability
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Advanced models</li>
              <li>• Complex reasoning</li>
              <li>• Premium support</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-4">Additional Resources</h3>
          <p className="text-gray-600 mb-4">
            During beta, additional resources are free:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• Computer resources</li>
            <li>• Browser automation</li>
            <li>• Data storage</li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            You only pay for agent steps. All other infrastructure is included.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

