import React,{useState} from "react";

function Form(props) {

const[name,setName]=useState('');

    function handleSubmit(e) {
        e.preventDefault();
        
        props.addTask(name)
        setName("")
      }

      function handleChange(e) {
        setName(e.target.value)
      }

   

  return (
    <form  onSubmit={handleSubmit}>
     
      <input
        type="text"
        id="new-todo-input"
        className="input "
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary"  >
        Add
      </button>
    </form>
  );
}

export default Form;