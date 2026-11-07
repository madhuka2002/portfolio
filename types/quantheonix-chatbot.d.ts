declare module '@quantheonix/chatbot' {
  import type { ComponentType } from 'react'

  export interface QuantheonixChatProps {
    apiUrl: string
    assistantId: string
  }

  export const QuantheonixChat: ComponentType<QuantheonixChatProps>
}
