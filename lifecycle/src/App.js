import Counter from "./Counter"
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true) // counter işleminin görüntülenip görüntülenmemesi için tanımlandı.
  
  return (
    <div className="App">
      {isVisible && <Counter />} {/*isVisible true ise Counter çalışsın */}

      <br />
      
      <button onClick={ () => setIsVisible(!isVisible) }>Toggle Counter</button> 
{/* arrtırma işlemini durdurmak için setInterval'i unmount etmek gerekir. */}
    </div>
  );
}

export default App;
