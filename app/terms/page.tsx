import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section id="terms" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600">Last updated: December 2024</p>
        </div>

        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using $AB Token services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-4">2. Use License</h2>
            <p className="leading-relaxed mb-4">
              Permission is granted to temporarily use $AB Token services for personal and commercial purposes. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-6">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose without authorization</li>
              <li>Attempt to reverse engineer any software contained in $AB Token services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-4">3. Disclaimer</h2>
            <p className="leading-relaxed">
              The materials on $AB Token are provided on an 'as is' basis. $AB Token makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including without 
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
              or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-4">4. Limitations</h2>
            <p className="leading-relaxed">
              In no event shall $AB Token or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising 
              out of the use or inability to use the materials on $AB Token.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

