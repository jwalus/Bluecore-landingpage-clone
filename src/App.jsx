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
    <div className='mx-72'>
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
