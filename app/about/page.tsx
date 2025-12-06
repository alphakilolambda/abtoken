import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About $AB Token
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Building the future of tokenized agent infrastructure
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              $AB Token is designed to revolutionize how developers build, deploy, and monetize AI agents. 
              We provide a complete token infrastructure that eliminates the need to build your own systems 
              from scratch. With $AB Token, you get staking, trading, rewards, and more - all in one powerful token.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-4">What We Offer</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Pre-configured Infrastructure:</strong> Every token comes with essential capabilities built-in</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Staking & Rewards:</strong> Multiple staking pools with competitive APY rates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Developer-Friendly:</strong> Simple API, SDKs, and comprehensive documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Transparent Tokenomics:</strong> Clear distribution and allocation strategy</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Why Choose $AB Token</h2>
            <p className="text-gray-700 leading-relaxed">
              Don't waste time building your own token infrastructure. $AB Token gives you everything you need 
              to focus on your core use case. From autonomous research to voice interfaces, developers are shipping 
              production AI agents with $AB Token.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

