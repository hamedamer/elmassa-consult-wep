import Hero from '../components/Hero.jsx'
import ScanToBim from '../components/ScanToBim.jsx'
import MetricsStrip from '../components/MetricsStrip.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import ComprehensiveServices from '../components/ComprehensiveServices.jsx'
import ProcessArc from '../components/ProcessArc.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import PlatformsFormats from '../components/PlatformsFormats.jsx'
import TargetIndustries from '../components/TargetIndustries.jsx'
import CaseStudies from '../components/CaseStudies.jsx'
import Benefits from '../components/Benefits.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <ScanToBim />
      <MetricsStrip />
      <ServicesSection />
      <ComprehensiveServices />
      <ProcessArc />
      <WhyChooseUs />
      <PlatformsFormats />
      <TargetIndustries />
      <CaseStudies />
      <Benefits />
      <Testimonials />
      <FAQ />
    </>
  )
}
