import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PhilosophySection from '../components/PhilosophySection'
import CatalogGrid from '../components/CatalogGrid'
import SystemShowcase from '../components/SystemShowcase'
import TechSection from '../components/TechSection'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Maduro Lighting | Intelligent Systems</title>
        <meta
          name="description"
          content="Precision-engineered lighting hardware for live performance, high-impact touring rigs, and permanent architectural installations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <PhilosophySection />
        <CatalogGrid />
        <SystemShowcase />
        <TechSection />
        <Testimonial />
      </main>
      <Footer />
    </>
  )
}
