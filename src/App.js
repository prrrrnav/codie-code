import Hero from './Hero';
import Navbar from './Navbar';
import Bottom from './Bottom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <div className="bg-black h-auto w-auto ">
      <Navbar/>
      <Hero/>
      <Bottom/>
    </div>
  );
}

export default App;
