import { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import '../../App.css';
import './Contact.css'
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

class Contact extends Component {
render() {
    return (
    <div className = "Contact-Form">
      <Form>
        <label for = "Email">Email: </label>
        <Form.Field id = 'input-email' control = {Input} name = 'user_email' placeholder = 'Email...' required icon = 'mail' iconPosition = 'left'/>
        <label for = "Name">Name: </label>
        <Form.Field id = 'input-name' control = {Input} name = 'user_name' placeholder = 'Name...' required icon = 'user circle' iconPosition = 'left'/>
        <label for = "Subject">Subject: </label>
        <Form.Field id = 'input-subject' control ={Input} name = 'user_subject' placeholder = 'Subject...' required/>
        <label for = "Subject">Message: </label>
        <Form.Field id = 'form-textarea-control-opinion' control ={TextArea} name = 'user_message' placeholder = 'Message...' required/>
        <Button type = 'submit' color = 'green'>Submit</Button>
      </Form>
    </div>
  );
}
}
export default Contact;