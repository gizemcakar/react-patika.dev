import { useState } from "react";

function App() {
  const [name, setName] = useState("Gizem");
  const [age, setAge] = useState(30)
  const [friends, setFriends] = useState(["Yasin","Burçak"])

  return (
    <div className="App">
      <h1> Hello {name} ! </h1>
      <h2>Age {age}</h2>
 
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
    </div>
  );
}
// veya ["Merve", ...friends] yazarsak başa ekler yeni ismi.
export default App;
