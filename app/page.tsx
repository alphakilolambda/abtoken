import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TokenFeatures from '@/components/TokenFeatures'
import WalletConnect from '@/components/WalletConnect'
import StakingSection from '@/components/StakingSection'
import Tokenomics from '@/components/Tokenomics'
import BuySell from '@/components/BuySell'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TokenFeatures />
      <WalletConnect />
      <StakingSection />
      <Tokenomics />
      <BuySell />
      <Testimonials />
      <Footer />
    </main>
  )
}

