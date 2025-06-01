import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title' // Add this import
import { useNavigate } from 'react-router-dom'

const FeatureDestination = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
      <Title 
        title='Featured Destination' 
        subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'
      />
      <div className='flex flex-nowrap justify-between gap-6 mt-20 w-full overflow-x-auto'>
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <div key={room._id} className="w-1/4 min-w-[250px]">
            <HotelCard room={room} index={index} />
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/rooms'); scrollTo(0.0)}}></button>
      <button className='my-16 px-4 py-2 texsm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>View All Destinations</button>
    </div>
  )
}

export default FeatureDestination


