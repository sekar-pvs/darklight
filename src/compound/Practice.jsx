import React from 'react'

function Practice() {
  return (
    <main>
        <div className='p-5  rounded  bg-slate-700 border-stone-950'>
           <p className='flex justify-center'>  <span className='text-5xl uppercase  text-lime-500 '>food</span><span className='text-4xl text-white uppercase font-thin '>court</span> </p>
            <nav className='uppercase '>
              <div className='ml-5 flex justify-end' >
                <a href="#" className='ml-5 hover:underline hover:text-white' onClick={()=>console.log('Home')}>home</a>
            
                <a href="#" className='ml-5 hover:underline  hover:text-white ' onClick={()=>console.log('Contact')}>contact</a>
           
            
                <a href="#" className='ml-5 hover:underline  hover:text-white'onClick={()=>console.log('Details')}>details</a>
             </div>
         </nav>
        </div> 
          <div className='grid gap-y-4  gap-x-5 md:grid-cols-3 '>
            <div className='bg-red-300 '>1</div>
            <div className='bg-red-300 '>2</div>
            <div className='bg-red-300 '>3</div>
            <div className='bg-red-300 '>4</div>
            <div className='bg-red-300 '>5</div>
            <div className='bg-red-300 '>6</div>
          </div>    
    </main>

  )
}

export default Practice