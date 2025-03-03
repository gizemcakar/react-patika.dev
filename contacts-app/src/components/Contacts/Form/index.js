import { useState, useEffect } from 'react'

const initialFormValues = ({fullName: "", phone_number: ""})

function Form({addContact, contacts}) {
    const [form, setForm] = useState(initialFormValues)

    useEffect( () => {
        setForm(initialFormValues)   // forma girilenleri kaydettikten sonra inputboxları temizlemek için 
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value}) 
    }

    const onSubmit = (e)=> {
        e.preventDefault();
        if(form.fullName === "" || form.phone_number === ""){
            return false;
        }
        addContact([...contacts, form]);

    }

  return (
    <form onSubmit={onSubmit}>
        <div>
            <input name="fullName" placeholder='Fullname' onChange={onChangeInput} />  
        </div>
        <div>
            <input name="phone_number" placeholder='Phone Number' onChange={onChangeInput} />
        </div>
        <div>
            <button type="submit">Add</button>
        </div>

    </form>
  )
}

export default Form

// value={form.fullName}