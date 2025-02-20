import { useState, useEffect } from "react";

function Counter() {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState("Giz")

    // mount edilme işlemi için;
    useEffect( () => {
        console.log("component mount edildi.")
        const interval = setInterval( () => {
            setNumber( (n) => n+1)} ,1000)
        
            return () => clearInterval(interval)   // unmount edildiğinde saymayı durdurması için
    }, [])

//     useEffect( () => {
//         console.log("State updated.") // sayfada başka birşey gerçekleştiğinde de çalışır. örn: bir buton daha olunca da
//   })
// sadece biri güncellendiğinde useEffect fonk.u görüntülenmesi istendiğinde 
// yani, spesifik hale getirilmesi istendiğinde 

    useEffect( () => {
        console.log("Number state updated.")
    }, [number])

    useEffect( () => {
        console.log("Name state updated.")
    }, [name])

// istenen sayıda veri güncellenmesi görüntülemek için [] içerisinde yazılır.
// useEffect( () => {
//  console.log("Number or name state updated.")  
// }, [number, name])

  return (
    <div>   
        <h1>{number}</h1>
        <button onClick={ () => setNumber( number + 1 )}>Click</button>
        {/* <hr />
        <h1>{name}</h1>
        <button onClick={ () => setName( "Gizem" )}>Click</button> */}
    </div>
    
  )
}

export default Counter