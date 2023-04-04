import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { About, Contact, Footer, Home, Navigation, Pricing } from "./Components";
import ScrollToTop from './Helpers/ScrollToTop';


function App() {
  let location = useLocation()

  return (
    <>
      <Navigation />
      <ScrollToTop />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;