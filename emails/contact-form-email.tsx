import type { ReactNode } from 'react'

interface ContactFormEmailProps {
  name: string
  email: string
  message: string
}

function ContactFormEmail({
  name,
  email,
  message
}: Readonly<ContactFormEmailProps>): ReactNode {
  return (
    <div>
      <h1>Contact form submission</h1>
      <p>
        From <strong>{name}</strong> at {email}
      </p>
      <h2>Message:</h2>
      <p>{message}</p>
    </div>
  )
}

export default ContactFormEmail
