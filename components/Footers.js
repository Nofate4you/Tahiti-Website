import React from 'react'

const Footers = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className='text-center mt-10  text-red-500 font-bold'>© 2001-{currentYear} Tahiti Island</footer>
  )
}

export default Footers