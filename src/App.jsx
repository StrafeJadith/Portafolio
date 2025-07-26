import { Routes, Route } from 'react-router-dom';
import './index.css'
import Projects from './pages/Projects.jsx'
import Home from './pages/Home.jsx'

// import './App.css'

function App() {

  return (

    <>
      <div>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
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
