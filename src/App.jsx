import Header from "./Header"; 
// import './App.css';
import { Link } from 'react-router-dom';
import './index.css';

import { array_of_words } from './Array_of_words'; 

function App() {


   return (

      <div>

         <p>Main</p>

         <Link to='words_1' id="sasd">Words_1</Link>

         {/* <p>{array_of_words[0][0][0]}</p> */}



      </div>

   );

}

export default App;
