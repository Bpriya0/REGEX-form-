import React, { useState , useEffect} from 'react';
import './List.css'
const List = () => {
    return (
        <>
          <div className='form-container'>
            
            <div className='form-content-left'>
              <img className='form-img' src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80' alt='spaceship' />
            </div>
            <div className='form-content-right'>
            <h1 className='list-success'>List</h1>
            
        
          </div>
          </div>
        </>
      );
    };
    
    export default List;
    