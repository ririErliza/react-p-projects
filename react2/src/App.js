import Create from './component/Create';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
