import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { GithubProvider } from './components/context/github/GithubContext'
import { AlertProvider } from './components/context/alert/AlertContext'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/notfound' element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App