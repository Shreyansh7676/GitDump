import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Marketplace from '../components/Marketplace'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marketplace />
      <Features />
      <HowItWorks />
      <Footer />
    </>
  )
}
