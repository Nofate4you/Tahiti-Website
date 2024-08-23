import React from 'react'

const Footers = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className='text-center text-red-500 font-bold'>© 2001-{currentYear} Tahiti Island</footer>
  )
}

export default Footers