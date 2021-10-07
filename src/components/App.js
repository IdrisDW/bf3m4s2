import React ,{ Component} from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';


// const tasks = ["hacer la tarea", "correr", "dormir", "correr"];

class App extends Component{

  state = {tasks:  ["hacer la tarea", "correr", "dormir", "correr"] }
// function App() {
  // const datos = [1,2,3,4,5,6];
  // const ManyTodoList = datos.map(() => ...)
  // return
  render() {
  return (
    <div className="wrapper">
      <div className="card frame">
        <Header  >
        Hay {this.state.tasks.length} tareas    </Header>
        <TodoList tasks ={this.state.tasks }  />
        {/* {ManyTodoList} */}
    
        <Form />
      </div>
    </div>
  );
  }
}

export default App;
 
