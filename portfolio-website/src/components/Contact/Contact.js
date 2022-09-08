import { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import '../../App.css';
import './Contact.css'
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
class Contact extends Component {

handleSubmit = async (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Email Submitted",
      text: "Message Sent!",
      icon: "success",
      button: "Close",
    });

    
};

render() {
    return (
    <div className = "Contact-Form">
      <Form onSubmit={this.handleSubmit}>
        <h1>Contact Me</h1>
        <label className = "label" for = "Email">Email: </label>
        <Form.Field id = 'input-email' control = {Input} name = 'user_email' placeholder = 'Email...' required icon = 'mail' iconPosition = 'left'/>
        <br></br>
        <label className = "label" for = "Name">Name: </label>
        <Form.Field id = 'input-name' control = {Input} name = 'user_name' placeholder = 'Name...' required icon = 'user circle' iconPosition = 'left'/>
        <br></br>
        <label className = "label" for = "Subject">Subject: </label>
        <Form.Field id = 'input-subject' control ={Input} name = 'user_subject' placeholder = 'Subject...' required/>
        <br></br>
        <label className = "label" for = "Message">Message: </label>
        <Form.Field id = 'input-message' control ={TextArea} name = 'user_message' placeholder = 'Message...' required/>
        <Button type = 'submit' color = 'green'>Send</Button>
      </Form>
    </div>
  );
}
}
export default Contact;