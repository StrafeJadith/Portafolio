import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css'
import Projects from './pages/Projects.jsx'
import Home from './pages/Home.jsx'
import { AnimatePresence } from 'framer-motion';

// import './App.css'

function App() {

  const location = useLocation();

  return (


    <>
      <div>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />

          </Routes>
        </AnimatePresence>
      </div>
    </>
    // <>
    //   <Header />
    //   <div style={{ paddingTop: '70px' }}>
    //     <Section>
    //     </Section>
    //   </div>

    // </>
  )
}


export default App
