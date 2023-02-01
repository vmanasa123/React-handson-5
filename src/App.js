
import './App.css';
import PureComp from './components/PureComp';

import Comp1 from './Hoc/Comp1';
import Comp2 from './Hoc/Comp2';

function App() {
  return (
  // pure component
  <div>
  <h1 style={{textAlign:'center'}} > React Pure Component || &&&& ||  React Higher Order Class </h1>
  
  <pre style={{textAlign:'center',fontSize:'20px'}}>
A React component is considered pure if it renders the same  output for the same state and props.
    <br/> For this type of class component, React provides the PureComponent base class.
  Class components that <br/>extend the React.PureComponent class are treated as pure components.
  
  <PureComp />
  </pre>
  
   {/* Higher order class*/}

  <pre style={{textAlign:'center',fontSize:'20px'}}>
  A higher order component function accepts another function as an argument.The map function is the 
  <br/>best example to understand this.The main goal of this is to decompose the component logic 
   into simpler <br/> and smaller functions that can be reused as you need.

  
<Comp1/>
<Comp2/>
 
  </pre>
  </div>
  );
}

export default App;
