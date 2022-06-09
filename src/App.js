import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main>
        Content
      </main>
      <Footer />
    </div>
  )
}

export default App