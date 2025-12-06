import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            API Features
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Through one API, deploy an agent that can access these essential capabilities.
            Every $AB Token comes pre-configured with these essential capabilities out-of-the-box.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-4">Browse</h3>
            <p className="text-gray-600">
              Navigate websites, click elements, fill forms automatically
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-4">Generate</h3>
            <p className="text-gray-600">
              Generate content, code, and responses using AI models
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-4">Integrate</h3>
            <p className="text-gray-600">
              Integrate with external APIs and services seamlessly
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-4">Listen</h3>
            <p className="text-gray-600">
              Process audio input and voice commands
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-4">Remember</h3>
            <p className="text-gray-600">
              Persistent memory and context across sessions
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-4">Scale</h3>
            <p className="text-gray-600">
              Auto-scaling infrastructure for high-volume operations
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-4">Scan</h3>
            <p className="text-gray-600">
              Scan documents and extract structured data
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-4">Scrape</h3>
            <p className="text-gray-600">
              Web scraping and data extraction capabilities
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-4">Search</h3>
            <p className="text-gray-600">
              Search across documents, databases, and web
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-4">See</h3>
            <p className="text-gray-600">
              Visual processing and image recognition
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-4">Speak</h3>
            <p className="text-gray-600">
              Text-to-speech and voice output capabilities
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-4">Use Software</h3>
            <p className="text-gray-600">
              Interact with desktop applications and software
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

