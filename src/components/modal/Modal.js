import React from 'react';

import './Modal.css'

export const Modal = ({ show, close }) =>{
return (

<>
{/* <h1>Hello World</h1> */}
<div className="modal-wrapper"
 style= {{
   transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
   opacity: show ? '1' : '0'
 }}
>
   <div className="modal-header">
   <p>Welcome to the site</p>
   <span onClick={close} className='close-modal-btn'>x</span>

    </div>
  <div className="madal-content">   
       <div className="modal-body">
         <h4>Modal</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit delectus sit eligendi distinctio quisquam ullam nulla officiis blanditiis ipsa veniam?</p>
      </div>
     <div className="modal-footer">
      <button onClick={close} className="btn-cancel">Close</button>

      </div>

   </div>

</div>
</>

)


}