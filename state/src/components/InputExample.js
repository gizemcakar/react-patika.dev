import { useState } from 'react'

// function InputExample() {
//     const [name, setName] = useState("")
//     const [surname, setSurname] = useState("")
//     // veya inputtaki fonk.u burada tanımlayabiliriz:
//     const onChangeName = (event) => setName(event.target.value)
//     const onChangeSurname = (e) => setSurname(e.target.value)
//   return (
//     <div>
//         Name <br />
//         {/* <input value={name} onChange={ (event) => setName(event.target.value) }/> */}
//         <input value={name} onChange={onChangeName} />
//         <br /><br />
//         Surname <br />
//         <input value={surname} onChange={onChangeSurname}/>
//         <br /><br />
//         {name} {surname}
//     </div>
//   )
// }


// Her bir input için her defasında bir değişkene fonk. tanımlamak yerine bir fonk. tanımlayıp tüm inputlar için kullanabiliriz:

function InputExample() {
  const [form, setForm] = useState({ name:"", surname:""})
  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  }
  return (
     <div>
         Name <br />
         <input name="name" value={form.name} onChange={onChangeInput} />
         <br /><br />
         Surname <br />
         <input name="surname" value={form.surname} onChange={onChangeInput}/>
         <br /><br />
         {form.name} {form.surname}
     </div>
   )
 }
 
export default InputExample