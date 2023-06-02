import {
  Navbar,
  Hero,
  Campaigns,
  CustomerSlider,
  Cards,
  CTA,
  Footer,
  HeroImageSlider
} from './components'

function App() {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <HeroImageSlider />
      <Campaigns />
      <CustomerSlider />
      <Cards />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
