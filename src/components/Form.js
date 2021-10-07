import React , {Component}from 'react';
import '../css/form.css';

// function Form(props) {
class Form extends Component{
  state={textFieldContent: 'otra cosa'};

  render (){
  return (
    <form>
      <input 
        type='text'
        value={this.state.textFieldContent}
        onChange= {(e) =>{
           this.setState({textFieldContent:  e.target.value });
        }}
        className='input'
        placeholder='Agrega una tarea'
      />
      <button className='button'
       onClick={(e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.textFieldContent);

      }}>
        
        Enviar</button>
    </form>
  );
}
}

export default Form;