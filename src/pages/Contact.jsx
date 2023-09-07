
import { useState } from 'react'

const MonFormulaire = () =>{
    const [formData, setFormData] = useState({
        name: '',
        firstname: '',
        email: '',
        phone: '',
        message: ''
    })


const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,

    })
}

const validEmailRegex = RegExp(
    // eslint-disable-next-line no-useless-escape
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    );

const validPhoneRegex = RegExp(
    // eslint-disable-next-line no-useless-escape
    /^[0-9]{10}$/
    );    

const handleSubmit = (event) => {
    event.preventDefault()

    if(formData.name === '' || formData.firstname === '' || formData.email === '' || formData.phone === '' || formData.message === ''){
        alert('Veuillez remplir tous les champs')
        return
    }

    if(!validEmailRegex.test(formData.email)){
        alert('Veuillez entrer un email valide')
        return
    }

    if(!validPhoneRegex.test(formData.phone)){
        alert('Veuillez entrer un numéro de téléphone valide')
        return
    }

    console.log(formData)
}

    return(
        <>
        <h1>Formulaire</h1>   

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

            <label htmlFor="name">Prénom</label>
            <input type="text" id="firstname" name="firstname" value={formData.firstname}
          onChange={handleChange}/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email}
          onChange={handleChange} />

            <label htmlFor="phone">Téléphone</label>
            <input type="tel" id="phone" name="phone" value={formData.phone}
          onChange={handleChange}/>

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message}
          onChange={handleChange} />

            <button type="submit">Envoyer</button>
            </form>

        </>

    )
}




   


export default MonFormulaire