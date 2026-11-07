'use client'

import dynamic from 'next/dynamic'

import '@quantheonix/chatbot/chatbot.css'

const QuantheonixChat = dynamic(
  () => import('@quantheonix/chatbot').then((module) => module.QuantheonixChat),
  { ssr: false }
)

const apiUrl = process.env.NEXT_PUBLIC_QUANTHEONIX_API_URL?.trim()
const assistantId = process.env.NEXT_PUBLIC_QUANTHEONIX_ASSISTANT_ID?.trim()

export default function QuantheonixChatWidget() {
  if (!apiUrl || !assistantId || assistantId === 'PASTE_ASSISTANT_ID_HERE') {
    return null
  }

  return <QuantheonixChat apiUrl={apiUrl} assistantId={assistantId} />
}
