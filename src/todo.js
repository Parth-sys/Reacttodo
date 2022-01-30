

import React from "react";





export default function Todo(props) {
  console.log(props)
    return (
      <li className="todo stack-small"  style={{textDecoration:props.completed?"line-through" :""}}   >
        <div className="c-cb"     >
          <input id={props.id} type="checkbox" 
          onChange={()=>props.toggleTaskCompleted(props.id)  }       
          />
          <label className="todo-label" htmlFor="todo-0"  style={{textDecoration:props.completed?"line-through" :""}}   >
            {props.name}
          </label>
        </div>
    
      
      </li>
    );
  }























