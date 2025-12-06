import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section id="careers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Careers
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Join us in building the future of tokenized agent infrastructure
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Open Positions</h2>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals to join our team. Check back soon for open positions.
            </p>
            <p className="text-gray-600">
              In the meantime, feel free to reach out to us at{' '}
              <a href="mailto:careers@abtoken.com" className="text-black font-semibold hover:underline">
                careers@abtoken.com
              </a>
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-black mb-4">Why Work With Us</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span>Work on cutting-edge AI and blockchain technology</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span>Competitive compensation and token rewards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span>Remote-friendly work environment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span>Opportunity to shape the future of AI agents</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

