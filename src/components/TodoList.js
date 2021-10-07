// import React from 'react';
// import Todo from './Todo';
// import '../css/TodoList.css';

// function TodoList() {

//   const tasks = ['hacer la tarea', 'correr' , 'dormir', 'correr'];

//   return (
//     <div className="list-wrapper">
//       {tasks.map((task)=>(
//         <Todo task = {task}/>
//       ))}
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//     </div>
//   )
// };

// export default TodoList;



import React from 'react';
import Todo from './Todo';

function TodoList(props){
  // const tasks = ["hacer la tarea", "correr", "dormir", "correr"];

  return(
    <div className="list-wrapper">
      {props.tasks.map((task , index) => 
      (

        <Todo task = {task} key = {task} />
      )
      )}
    </div>

  )


}

export default TodoList;