import React from 'react'

function Button(props) {
  return (
      <a href={props.href} className={`${props.type == 'primary' ? 'bg-[#065C9B] text-white hover:bg-[#1E85C2]' : 'bg-white text-black' } rounded-full px-5 py-2 transition-all duration-300 inline-block  hover:scale-105 hover:cursor-pointer`}>
          {props.title}
      </a>
  )
}

export default Button