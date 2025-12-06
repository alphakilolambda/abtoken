import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Get in touch with the $AB Token team
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-2xl font-bold text-black mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-black mb-2">Discord Community</h3>
                <p className="text-gray-600 mb-2">
                  Join our community Discord for support and discussions
                </p>
                <a href="https://discord.gg/agentbase" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:underline">
                  Join Discord →
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2">Twitter / X</h3>
                <p className="text-gray-600 mb-2">
                  Follow us for updates and announcements
                </p>
                <a href="https://x.com/Agentbaseai" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:underline">
                  @Agentbaseai →
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2">Email</h3>
                <p className="text-gray-600 mb-2">
                  For business inquiries and partnerships
                </p>
                <a href="mailto:contact@abtoken.com" className="text-black font-semibold hover:underline">
                  contact@abtoken.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

