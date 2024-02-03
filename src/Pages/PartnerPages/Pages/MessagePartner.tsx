import React from 'react'
import MainMessage from '../../../components/messagesPage/MainMessage'

const MessagePartner = () => {
  return (
    <>
      <h1 className='p-5 text-2xl'>Обратная связь и почта</h1>
      <MainMessage message={`клиент`}/>
    </>
  )
}

export default MessagePartner