import { useState } from "react";

function App() {
  const [name, setName] = useState("Gizem");
  const [age, setAge] = useState(30)
  const [friends, setFriends] = useState(["Yasin","Burçak"])
  const [address, setAddress] = useState({ title: "Eskişehir", zip:26000})

  return (
    <div className="App">
      <h1> Hello {name} ! </h1>
      <h2>Age {age} </h2>
 
      <button onClick={() => { setName("Mert") }}>Change name</button>
      <button onClick={() => { setAge(29) }}>Change age</button>
      <hr />
      <br />

      <h2>Friends</h2>
      {
        friends.map( (friend, index) => (
          <div key={index}> {friend} </div>
        ))
      }
      <br />
      <button onClick= {() => { setFriends([...friends, "Merve"]) }}>Add new friend</button>
      <br /><br />
      <h2>Address</h2>
      <div> {address.title} {address.zip} </div>
      <br />
      <button onClick= {() => { setAddress({...address, title: "İzmir"})}}>change the address</button>

    </div>
  );
}
// veya ["Merve", ...friends] yazarsak başa ekler yeni ismi.

// eğer objenin bazı proplarını değiştirmek istersek, setAddress( {...address, değiştirmek istediğimiz prop}) 
// örn: setAddress( {...address, title: "İzmir"}) böylece, diğer proplar aynı kalır sadece title değişir.

export default App;
