import React from "react";
import "../css/Todo.css";
import Checkmark from './Checkmark';
 import PropTypes from 'prop-types';

class Todo extends React.Component {
  render() {
    return (
      <div className={`list-item ${this.props.task.done ? "done" : ""}`}>
        {this.props.task.content}
        <div className="is-pulled-right">
        <Checkmark done={this.props.done} />


        <button
          onClick={() => {
            // this.setState((prevState) => ({ done: !prevState.done }));
            this.props.doTask(this.props.task.id);
          }}
          className="delete is-pulled-right"
          style={{ height: 15, width: 10 }}
        />
      </div>
      </div>
    );
  }
}

Todo.propTypes = {
  done: PropTypes.bool,
}


export default Todo;