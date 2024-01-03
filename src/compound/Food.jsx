import React, { useState } from 'react'

const Food = () => {
    const [open,setOpen]=useState(false);
    const handelNav =()=>{
        console.log('clicked');
        console.log(open);        
        setOpen(!open);
       
        
    }
  return (
    
    <nav className=' pt-5 bg-slate-500'>
        <div className='md:flex justify-between w-5/6 md:max-w-5xl mx-auto'>
          <div className='flex justify-between'>
              <div >
                    <span className=' text-6xl uppercase text-lime-500'>food</span>
                    <span className='text-5xl uppercase font-thin'>shop</span>
                    
              </div>
              <div className='text-6xl md:hidden'>
                        <button 
                            className='text-lime-500 hover:text-white hover:bg-lime-400 hover:rounded-full'
                            onClick={handelNav} >
                            +
                        </button>
               </div>
              
          </div>  
            <div className={` md:block flex justify-end ${open?'block':'hidden'}`}>
                <div className=''>
                <ul className='md:flex md:space-x-3 '>
                    <li className='uppercase hover:bg-lime-500 p-3 hover:rounded-full text-2xl hover:text-white'>home</li>
                    <li className='uppercase hover:bg-lime-500 p-3 hover:rounded-full text-2xl hover:text-white'>contact</li>
                    <li className='uppercase hover:bg-lime-500 p-3 hover:rounded-full text-2xl hover:text-white'>details</li>
                </ul>
                </div>
            </div>
        </div>
    </nav>
    
  )
}

export default Food