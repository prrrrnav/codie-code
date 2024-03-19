import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Codebase from './Codebase';



function App() {
  return (
    <div className="bg-black h-auto w-auto ">
      <Navbar />
      <Routes>
        <Route path="/codie-code/" element={<Home/>} />     
        <Route path='/codie-code/Codebase' element={<Codebase/>} />   
      </Routes>

    </div>

  );
}

export default App;
