import { useState } from "react";
import "./App.css";


function App() {

  const [count,setCount] = useState(0)
 
  return (
    <div className=''>
      
      <p> il y a {count} seconde </p>
      <button onClick={()=>{setCount (count+1)}  }>  +</button>
      <button onClick={()=>{setCount (count-1)}  } >  -</button>
      <button onClick={()=>{setCount (0)} }>reset</button>
      
    </div>
  );
}

export default App;
