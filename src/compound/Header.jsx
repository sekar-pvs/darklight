import React from 'react'

function Header() {
  return (
    <div className='flex bg-zinc-700 flex-1 h-9 text-end p-2 '>  
        <nav className='uppercase '>
            <div className='ml-5 justify-items-end' >
                <a href="#" className='ml-5 hover:underline hover:text-white' onClick={()=>console.log('Home')}>home</a>
            
                <a href="#" className='ml-5 hover:underline  hover:text-white ' onClick={()=>console.log('Contact')}>contact</a>
           
            
                <a href="#" className='ml-5 hover:underline  hover:text-white'onClick={()=>console.log('Details')}>details</a>
            </div>
        </nav>
    </div>
  )
}

export default Header