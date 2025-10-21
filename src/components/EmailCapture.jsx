import { useState } from 'react'
import './EmailCapture.css'

function EmailCapture({ onSubmit }) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      onSubmit(email)
      setEmail('')
    }
  }

  return (
    <form className="email-capture" onSubmit={handleSubmit}>
      <input
        type="email"
        className="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder=""
        required
      />
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  )
}

export default EmailCapture
