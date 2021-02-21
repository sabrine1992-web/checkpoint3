
import './App.css';

import Adresse from './component/profile/Adresse';
import FullName from './component/profile/FullName';
import Profilephoto from './component/profile/Profilephoto';
function App() {
  return (
    <div className="App">
     <Profilephoto/>
     <FullName/>
     <Adresse/>
    </div>
  );
}

export default App;
