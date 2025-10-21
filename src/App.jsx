import { useState } from 'react'
import './App.css'
import ResponsiveBackground from './components/ResponsiveBackground'
import MenuOverlay from './components/MenuOverlay'
import EmailCapture from './components/EmailCapture'
import SuccessMessage from './components/SuccessMessage'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleEmailSubmit = (email) => {
    console.log('Email captured:', email)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="app">
      <ResponsiveBackground />

      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div className="container">
        <div
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          title="Open Menu"
        />

        <EmailCapture onSubmit={handleEmailSubmit} />

        <SuccessMessage show={showSuccess} />
      </div>
    </div>
  )
}

export default App
