import {
  Navbar,
  Hero,
  Campaigns,
  CustomerSlider,
  Cards,
  CTA,
  Footer
} from './components'

function App() {
  return (
    <div className='xl:px-20 md:px-4'>
      <Navbar />
      <Hero />
      <Campaigns />
      <CustomerSlider />
      <Cards />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
