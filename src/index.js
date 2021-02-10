import React from 'react';
import ReactDOM from 'react-dom';



//create a react component
const App = () => {
  return (
  <div>
    <lable className="label" for="name">Enter Name</lable>
    <input id="name" type="text"/>
    <button style={{backgroundColor:'blue', color:'white'}}>Submit</button>
</div>  
);
};

//Take the react component and show it on the screen
ReactDOM.render(
  <App></App>,
  document.querySelector('#root')
);