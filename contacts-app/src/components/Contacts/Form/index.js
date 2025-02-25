import {useState} from 'react'

function Form() {
    const [form, setForm] = useState({fullName: "", phone_number: ""})

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value}) 
    }

    const onSubmit = ()=> {
        console.log(form)
    }

  return (
    <form onSubmit={onSubmit}>
        <div>
            <input name="fullname" placeholder='Fullname' onChange={onChangeInput} />   
        </div>
        <div>
            <input name="phone_number" placeholder='Phone Number' onChange={onChangeInput} />
        </div>
        <div>
            <button onClick={onSubmit}>Add</button>
        </div>

    </form>
  )
}

export default Form