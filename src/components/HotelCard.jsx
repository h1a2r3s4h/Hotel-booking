import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={'/rooms/' + room._id}
      onClick={() => scroll(0, 0)}
      key={room._id}
      className="relative w-full shadow-md rounded overflow-hidden"
    >
      <div className="relative w-full h-60">
        <img src={room.images[0]} alt="" className="w-full h-full object-cover" />
        {index % 2 === 0 && (
          <p className='absolute top-3 left-3 px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full shadow'>
            Best Seller
          </p>
        )}
      </div>
      <div className='p-4 pt-5'>
        <div className='flex items-center justify-between'>
          <p className='font-playfair text-xl font-medium text-gray-800'>{room.hotel.name}</p>
          <div className='flex items-center gap-1'>
            <img src={assets.starIconFilled} alt="star-icon" className="w-4 h-4" /> 4.5
          </div>
        </div>
        <div className='flex items-center gap-1 text-sm text-gray-600'>
          <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
          <span>{room.hotel.address}</span>
        </div>
        <div className='flex items-center justify-between mt-4'>
          <p><span className='text-xl text-gray-800'>${room.pricePerNight}</span>/night</p>
          <button className='px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer'>
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard
