import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section id="privacy" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: December 2024</p>
        </div>

        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-6">
              <li>Account information (email address, username)</li>
              <li>Transaction data related to $AB Token usage</li>
              <li>Technical data (IP address, browser type, device information)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-4">3. Information Sharing</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share information in 
              certain situations such as compliance with legal obligations or protection of our rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your 
              personal information. However, no method of transmission over the Internet is 100% secure, 
              and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-4">5. Your Rights</h2>
            <p className="leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

