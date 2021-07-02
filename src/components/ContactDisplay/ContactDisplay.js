import React from 'react'
import ContactContext from '../../utils/ContactContext'


const ContactDisplay = _ => {
    return (
        <ContactContext.Consumer>
            {
            ({dispName,dispEmail,dispComment})=>(
                <>
                <h3>Name:{dispName}</h3>
                <h4>Email:{dispEmail}</h4>
                <h5>Comment:{dispComment}</h5>
                </>
            )
        }
        </ContactContext.Consumer>
    )
}
export default ContactDisplay
