import React from 'react'

const Footer = () => {
  return (
    <div className="min-h-sceen ">
      <div className="bg-gray-100 p-6 dark:bg-black dark:text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-4">Follow us on social media for the latest updates.</p>
        </div>
        <div className="flex justify-center space-x-4 mb-4 ">
          <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
          <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
          <a href="#" className="text-blue-500 hover:text-blue-700">Instagram</a>
          <a href="#" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
       </div> 
      </div> 
      <p className="text-center text-gray-600">© 2025 Your Company. All rights reserved.</p>
    </div>
  )
}

export default Footer
