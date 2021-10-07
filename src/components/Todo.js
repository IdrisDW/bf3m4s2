// import React from 'react';

// function Todo() {
//   return (
//     <div className="list-item">
//       Tarea
//       <button className="delete is-pulled-right" />
//     </div>
//   )
// };

// export default Todo;


import React from 'react';
import '../css/Todo.css';

class Todo extends React.Component {
  state = {
    done: true
  };

  render () {
    return (
      <div className={`list-item ${this.state.done ? 'done' : ''}`}>
        {this.props.task}
        {this.state.done}
        <button 
        onClick ={() => {
          this.setState ({done: !this.state.done});
        }}
        
        className="delete is-pulled-right"
        style={{height: 15,width : 10}}
        />
      </div>
    )
  }
}

export default Todo;
