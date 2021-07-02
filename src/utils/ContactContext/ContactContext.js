
import React,{createContext} from "react"

const ContactContext = createContext({
    name: '',
    email: '',
    comment: '',
    dispName: '',
    dispEmail: '',
    dispComment:'',
    handleInputChange:()=>{},
    handleFormSubmit:()=>{}
  })
  export default ContactContext