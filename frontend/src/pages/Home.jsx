import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Slides from '../components/Slides'
import FeaturedItems from '../components/FeaturedItems'



function Home() {
  return (
    <div>
    <Banner />
    <Navbar />
    <Slides />
    <FeaturedItems />
    <Footer />
    </div>
  )
}

export default Home