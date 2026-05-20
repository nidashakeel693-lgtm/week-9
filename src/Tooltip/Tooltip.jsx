import { useState } from 'react'

import './Tooltip.css'

function Tooltip() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>

        <div className='left-side'>
          <p>
            CSS only Tooltip to appear <br />
            above the item on hover.
          </p>
        </div>

        <div className='center'>
          <img
            src='arrow-removebg-preview.png'
            alt=''
          />
        </div>

        <div className='right-side'>

          <div className='nav-item'>
            <div className='message-box'>
              Here is everything I have built
            </div>

            <a href='#'>Projects</a>
          
          </div>
          <div className='nav-item'>
            <div className='message-box'>
              Here is everything I have built
            </div>
   <a href='#'>Home</a>
   </div>

   <div className='nav-item'>
            <div className='message-box'>
              Here is everything I have built
            </div>
          <a href='#'>Blog</a>
         </div>

        </div>

      </div>

    </>
  )
}

export default Tooltip
