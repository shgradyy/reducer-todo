import React from 'react';
import { useState } from 'react';

export const Form = ({dispatch}) => {

    const [state, setState] = useState();

   
    handleKeyDown = (event) => {
    
        if (event.key === 'Enter') {
          setState(event.target.value);
         
        }
      };

    handleSubmit = (event) => {
        dispatch({type: 'ADD_ITEM', payload: state})
    
        event.preventDefault();
        
        setState({todoItem: ""});
       
      }
    
    return (
        <div>
           <form onSubmit={handleSubmit} placeholder="" >
            <input type="text" value={state} onKeyDown={handleKeyDown}  />
            <button onClick={handleSubmit}>Add Item</button>
            <button>Clear List!</button>
          </form>
        </div>
      );
    }
    
    
    
   
