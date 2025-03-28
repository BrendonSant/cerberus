import React from 'react'

const Button = ({title,id,leftIcon,righIcon,containerClass}) => {
  return (
   <button id={id} className={`flex items-center w-full justify-center cursor-pointer group relative overflow-hidden text-white rounded-full px-7 py-3 ${containerClass}`}>
    {leftIcon}
   
    <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>
        <div>
        {title}
        </div>
    </span>
   {righIcon}
   </button>

  )
}

export default Button