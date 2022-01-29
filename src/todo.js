

import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/Button';




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























