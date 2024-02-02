import React from 'react'
import PushImage from '../pushImage/pushImage'

const ImgPerson = ({props}: any) => {
  return (
    <>
   <div className=" p-5">
   <p>Загрузите ваше фото</p>
<PushImage />
   </div>
    
    </>
  )
}

export default ImgPerson