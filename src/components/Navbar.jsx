import React from 'react'

const Navbar = () => {
  return (
    <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-6">
      <div class="relative flex h-16 items-center justify-between">
       
        <div class="flex flex-1 items-center justify-between">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-full " src="./ecell.png"/>
          </div>
            <div class="flex space-x-4">
              <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">About Us</a>
              <a href="https://ecell.iith.ac.in/" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</a>
              <a href="https://ecell.iith.ac.in/sponsor" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Partners</a>
              <a href="https://ecell.iith.ac.in/mun" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">IITH MUN </a>
            </div>
          </div>
        </div>
        
  
          
  

            
          </div>

    
   
  
  
   
  </nav>
  
  )
}

export default Navbar
