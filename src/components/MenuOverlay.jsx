import { useEffect } from 'react'
import './MenuOverlay.css'

function MenuOverlay({ isOpen, onClose }) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.querySelector('.menu-overlay')
      const menuBtn = document.querySelector('.menu-button')

      if (isOpen && menu && !menu.contains(e.target) && menuBtn && !menuBtn.contains(e.target)) {
        onClose()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen, onClose])

  return (
    <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
      <button className="menu-close" onClick={onClose}>&times;</button>
      <ul className="menu-items">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default MenuOverlay
