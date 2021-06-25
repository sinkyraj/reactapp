import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Modal } from './components/modal/Modal.js'

//import { Modal } from './components/Modal/Modal.js'

function App() {
  const [show, setShow] =useState(false)

  const closeModalHandler = () => setShow(false);
  return (
    // <>
    // <h1>This is app page</h1 >
   
    // </>
     <div>

      { show ? <div onclick={closeModalHandler} className='back-drop'></div> : null }
       
      <h1>This is app page</h1>
      <button onClick={()=> setShow(true)} className="btn-openModal">Open Modal</button>
      <Modal show={show} close={closeModalHandler} />
     </div>
  );
}

export default App;
