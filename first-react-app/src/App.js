import './App.css';
import User from "./components/User";
import UserList from './components/UserList';
import AddingAddress from './components/AddingAddress';

// import Header from './components/header';

const friends = [
  {
    id: 1,
    name: "Mert"
  },
  {
    id: 2,
    name: "Yasin"
  },
  {
    id: 3,
    name: "Burçak"
  } 
]
function App() {
  return (
    <>
      <User name="Gizem" surname="Çakar" isLoggedIn={true} age={30} />
      <UserList 
        name="Gizem" 
        surname="Çakar" 
        //isLoggedIn={true} 
        age={30} 
        friends={friends} 
      />
      <AddingAddress  address={{
          title:"Eskişehir",
          zip: 26000
        }} 
      />
    </>
  )
}

export default App;



 // return (
//     // <div> 
//     //   <h1> Hello React </h1>
//     //   <Header />         
//     // </div>
//     // <> yerine <React.Fragment> <React.Fragment /> yazılabiliyor.
//     <>
//       <Header />    
//       <p className="xyz"> ........ </p>
//       <label htmlFor="myinput">
//         Name
//         <input id="myinput" />
//     </label> 
//     </>

// component'e name, surname property olarak eklenebilir.
    // <>
    //   <User />  
    //   <h1>
    //     {
    //       isLoggedIn ? `Benim adım ${name}, soyadım ${surname}` : "Giriş yapmadınız."
    //     }
    //   </h1>
    // </>
    <>

    </>
//  );
