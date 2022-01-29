
import './App.css';
import Todo from './todo';
import Form from './Form';
import FilterButton from './Filterbutton';
import React,{useState} from 'react';
import { nanoid } from "nanoid";




function App(props) {
  




  const [filter, setFilter] = useState('All');
  
  const [tasks, setTasks] = useState(props.tasks)

 


  const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
  };

    const FILTER_NAMES=Object.keys(FILTER_MAP);



  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
   
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  
  }
 

const tasklist = tasks
.filter(FILTER_MAP[filter])
.map(task => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
  
  //  deleteTask={deleteTask}
   // editTask={editTask}
  />
));


  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
    
    />
  ));
  

  const tasksNoun = tasklist.length !== 1 ? 'tasks' : 'task';

  const headingText = `${tasklist.length} ${tasksNoun} remaining`;

  function addTask(name) {
    const newTask = { id: "todo-" +nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }



  return (
    <div className="todoapp stack-large">
      <h1></h1>
       
       <Form  addTask={addTask}  ></Form>



      <div className="filters btn-group stack-exception">
         {filterList}
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
       
      >
       {tasklist}
      </ul>
    </div>
  );
}
export default App;
