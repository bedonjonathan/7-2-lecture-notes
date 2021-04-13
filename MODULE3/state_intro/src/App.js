import Counter from './Components/Counter';
import Color from './Components/Color'
import Person from './Components/Person';
import ToggleText from './Components/ToggleText';
import './App.css';
import { Component } from 'react';
import ShoppingCart from './Components/ShoppingCart';
import Adder from './Components/Adder';

function App() {
  return (
    <div className="App">
     <Counter />
     <Color animal={"cat"} building={"house"} name={"AnJu"}/>
     <Person name={"Peter"} />
     <ToggleText />
     <ShoppingCart />
     <Adder />
     {/* <Counter someKeyInProps={someValueForKey}/> */}
    </div>
  );
}

export default App;

