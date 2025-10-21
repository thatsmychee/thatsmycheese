import { useEffect, useState } from 'react'
import './ResponsiveBackground.css'

function ResponsiveBackground() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate optimal background size based on viewport
  const getBackgroundStyle = () => {
    const aspectRatio = dimensions.width / dimensions.height

    return {
      backgroundImage: 'url(/background.jpg)',
      backgroundSize: 'contain',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#5b5478',
      width: '100%',
      height: '100%',
      transition: 'all 0.3s ease'
    }
  }

  return (
    <div
      className="responsive-background"
      style={getBackgroundStyle()}
    />
  )
}

export default ResponsiveBackground
