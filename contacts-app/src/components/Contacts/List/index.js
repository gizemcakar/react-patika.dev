import React, { useState } from 'react'

function List({ contacts }) {
  const [filterText, setFilterText] = useState('')    // bos bir string deger olsun filterbox
  
  const filtered = contacts.filter( (item) => {
    return Object.keys(item).some((key) => 
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  })

  console.log("filtered", filtered)
  // filterText içriğini map func yerine filter func ile listelemek yerine içindekini bulmak için yapıldı
  // some metodu ile, fullName veya phonenumberdan herhangi biri yazıldığında dönebilmesini sağlar.
  // Object.keys ile item yani arrayi her bir elemanının fullName ve phone_number değerlerini key olarak alır.
  
  return (
    <div>
      <input 
          placeholder='Filter contact' 
          value={filterText} 
          onChange={(e) => setFilterText(e.target.value)} 
      />

      <ul>
        {filtered.map((contact, i) => (
          <li key={i}> {contact.fullName}</li>)   // harf veya numara arasak da sadece ait isim diğerini göstermek istemediğimiz için
          )}
      </ul>
    </div>
  )
}

export default List