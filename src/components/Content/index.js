import React from 'react'
import "./content.css"


const SideContent = () => {
  return (
    <div className='main-container'>
    <div className="side-box">
       <div className='content-items'>Content</div>
       <div className='content-items'>Content</div>
       <div className='content-items'>Content</div>
       <div className='content-items'>Content</div>
       <div className='content-items'>Content</div>
       <div className='content-items'>Content</div>
       <div className='content-items'>Content</div>
       <div className='content-items'>Content</div>
       </div>

       <div className='middle-content-items'>

          <div className="top-box">Content</div>
          
          <div className="middle-box">
          <div className="left-middle-box">Content</div>
          <div className="center-middle-box">Content</div>
          <div className="right-middle-box">Content</div>
          </div>

          <div className="bottom-box">Content</div>
          
       </div>
    </div>
  )
}
export default SideContent;