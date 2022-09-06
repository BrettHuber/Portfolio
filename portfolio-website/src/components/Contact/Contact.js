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
        <Form.Field id = 'form-input-control-email' control = {Input} label = 'Email' name = 'user_email' placeholder = 'Your Email' required icon = 'mail' iconPosition = 'left'/>
        <Form.Field id = 'form-input-control-last-name' control = {Input} label ='Name' name = 'user_name' placeholder = 'Your Name' required icon = 'user circle' iconPosition = 'left'/>
        <Form.Field id = 'form-textarea-control-opinion' control ={TextArea} label = 'Message' name = 'user_message' placeholder = 'Message' required/>
        <Button type = 'submit' color = 'green'>Submit</Button>
      </Form>
    </div>
  );
}
}
export default Contact;