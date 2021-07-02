import React,{Component} from 'react'
import ContactContext from '../../utils/ContactContext'
import ContactForm from '../../components/ContactForm'
import ContactDispaly from '../../components/ContactDisplay'


class Contact extends Component {
  state={
    name: '',
    email: '',
    comment: '',
    dispName: '',
    dispEmail: '',
    dispComment:'',

    handleInputChange: event =>{
      this.setState({[event.target.name]:event.target.value})
    },
    handleFormSubmit: event=>{
      event.preventDefault()
      this.setState({
        dispName: this.state.name,
        dispEmail: this.state.email,
        dispComment: this.state.comment,
        name:'',
        email:'',
        comment:''
        
    })
  }
}
  render() {
    return (
     <ContactContext.Provider value={this.state}>
      <ContactForm/>
      <ContactDispaly/>
     </ContactContext.Provider>
    );
  }
}
export default Contact







