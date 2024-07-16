import React from 'react'

const Button = ({ title }: { title: string }) => {
  return (
    <button type="button" className="relative bg-white text-black py-3 px-5 rounded-lg font-medium hover:scale-105 active:scale-90 transition group overflow-hidden border-none outline-none">
      <div className="absolute bg-white w-2 h-2 rounded-full -bottom-2 left-1/2 -translate-x-1/2 group-hover:scale-[20] transition duration-500 mix-blend-difference"></div>
      <p className="text-black group-hover:text-white duration-500 relative">{title}</p>
    </button>
  )
}

export default Button