import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Introducing $AB Token',
      excerpt: 'The token to build, deploy, and earn. Learn about our vision and roadmap.',
      date: 'Dec 2024',
      href: '/blog/introducing-ab-token'
    },
    {
      title: 'Getting Started with Staking',
      excerpt: 'A complete guide to staking your $AB tokens and earning rewards.',
      date: 'Dec 2024',
      href: '/blog/staking-guide'
    },
    {
      title: 'Tokenomics Explained',
      excerpt: 'Understanding the $AB Token distribution and allocation strategy.',
      date: 'Dec 2024',
      href: '/blog/tokenomics'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section id="blog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Latest updates, guides, and insights about $AB Token
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={index} href={post.href} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-black transition-colors">
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <h3 className="text-xl font-bold text-black mb-3">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}

