import {useState, useEffect} from 'react'
import "./styles.css"

import List from './List'
import Form from './Form'


function Contacts() {
  const [contacts, setContacts] = useState([
    {                                           //birkaç kayıtlı oge olması iin yazıldılar.
      fullName: "Gizem",
      phone_number: "121212333"
    },
    {
      fullName: "Mert",
      phone_number: "4545458"
    },
    {
      fullName: "Yasin",
      phone_number: "8989892"
    }
  ])

  useEffect( () => {
    console.log(contacts)
  }, [contacts])   // formu ekledikten sonra forma kaydedilenlerin bulunduğu arrayin son halini görüntüleyebilmek için useEffect kullanıldı.

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />    {/*forma daha önce yüklenenleri de görmek için contacts={contacts} eklenir. */}
    </div>
    
  )
}

export default Contacts