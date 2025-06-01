import React from 'react'

const Title = ({ title, subTitle, align = 'left', font }) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" ? "md:items-start md:text-left" : ""}`}>
      <h1 className={`text-4xl md:text-[40px] ${font || "font-playfair"}`}>{title}</h1>
      <p className='text-sm md:text-base text-gray-300 mt-4'>{subTitle}</p> {/* updated color for dark backgrounds */}
    </div>
  )
}

export default Title
