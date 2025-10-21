import './SuccessMessage.css'

function SuccessMessage({ show }) {
  return (
    <div className={`success-message ${show ? 'show' : ''}`}>
      <p>✨ You're on the list! ✨</p>
      <p style={{ fontSize: '14px', marginTop: '10px' }}>Check your email soon.</p>
    </div>
  )
}

export default SuccessMessage
