import About from "./components/About"
import Bottom from "./components/Bottom"
import ContactUs from "./components/ContactUS"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Reviews from "./components/Reviews"
import Services from "./components/Services"

const App = () => {
  return (
<main className="overflow-x-hidden antialiased text-neutral-800">
  <Navbar />
  <Hero />
  <Services />
  <Portfolio />
  <About />
  <Reviews />
  <ContactUs />
  <Bottom />
</main>
  )
}

export default App