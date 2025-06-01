import React from 'react'
import { assets, cities } from '../assets/assets'
import heroImage from '../assets/heroImage.png' // ✅ Adjust if needed

const Hero = () => {
  return (
    <div
      className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center h-screen'
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <p className='bg-[#49b9FF]/50 px-3.5 py-1 rounded-full mt-20'>
        The Ultimate Hotel Experience
      </p>

      <h1 className='font-playfair text-[28px] md:text-[56px] leading-tight font-bold md:font-extrabold max-w-xl mt-4'>
        Discover Your Perfect Gateway Destination
      </h1>

      <p className="mt-4 max-w-md">
        Unparalleled luxury & comfort await at the world's most exclusive hotels and resorts. Start your journey today.
      </p>

      <form className='bg-white text-gray-500 rounded-lg mt-4 px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>
        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="calendar" className='h-4' />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            list='destinations'
            id="destinationInput"
            type="text"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Type here"
            required
          />
          <datalist id='destinations'>
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="calendar" className='h-4' />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="calendar" className='h-4' />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div>
          <div className='flex items-center gap-2'>
            <label htmlFor="guests">Guests</label>
          </div>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-16"
            placeholder="0"
          />
        </div>

        <button
          type="submit"
          className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1'
        >
          <img src={assets.searchIcon} alt="searchIcon" className='h-7' />
          <span>Search</span>
        </button>
      </form>
    </div>
  )
}

export default Hero
