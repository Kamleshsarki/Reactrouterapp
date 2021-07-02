import React from 'react'
import ContactContext from '../../utils/ContactContext'

const ContactForm = _ => {
    
    return (
        <ContactContext.Consumer>
          {
            ({name,email,comment, handleInputChange,handleFormSubmit})=>(
              <form>
              <p>
               <label htmlFor="name">name</label>
               <input type="text" name="name" id ="name" onChange=
               {handleInputChange}value = {name} />
              </p>
              <p>
               <label htmlFor="email">email</label>
               <input type="text" name = "email" id ="email"onChange=
                { handleInputChange} value = {email}/>
              </p>
              <p>
                <label htmlFor="comment">comment</label>
                <textarea name="comment" id="comment" cols="30" rows="10"onChange=
                {handleInputChange}value = {comment}></textarea>
              </p> 
              <p>
                <button onClick = {handleFormSubmit}>Submit</button>
              </p>
          </form>
            )
          
          }
        </ContactContext.Consumer>
    )
}

export default ContactForm
