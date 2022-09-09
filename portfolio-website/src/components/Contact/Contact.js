import { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import '../../App.css';
import './Contact.css'
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
class Contact extends Component {

handleSubmit = async (event) => {
    event.preventDefault();
    // emailjs.init("bJBby5TiIur5Br_SS");
    // SID: event('S_ID')
    // TID: {"process.env.T_ID"}
    // UID: {"process.env.S_ID"}


   emailjs.sendForm('service_ewmc7h9', 'template_0l44cv7', event.target, 'bJBby5TiIur5Br_SS').then(function(response) {
      // emailjs.sendForm(SID, {process.env.T_ID}, event.target, UID).then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });
    Swal.fire({
      title: "Email Submitted",
      text: "Message Sent!",
      icon: "success",
      button: "Close",
    });
    event.target.reset();
};

render() {
    return (
    <div className = "Contact-Form">
      <Form onSubmit = {this.handleSubmit}>
        <h1>Contact Me</h1>
        <table className = 'tableForm'>
          <tr>
            <td colSpan={2}>
              <label className = "label" for = "Name">Name: </label>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Field className = "input" id = 'input-name-first' control = {Input} name = 'user_name_first' placeholder = 'Enter Your First Name *' required icon = 'user circle' iconPosition = 'left'/>
            </td>
            <td>
              <Form.Field className = "input" id = 'input-name-last' control = {Input} name = 'user_name_last' placeholder = 'Enter Your Last Name *' required icon = 'user circle' iconPosition = 'left'/>
            </td>
          </tr>
          <tr>
            <td>
              <label className = "label" for = "Email">Email: </label>
            </td>
            <td>
              <label className = "label" for = "Phone">Phone Number: </label>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Field className = "input" id = 'input-email' control = {Input} name = 'user_email' placeholder = 'Enter Your Email *' iconPosition = 'left' required/>
            </td>
            <td>
              <Form.Field className = "input" id = 'input-phone' control = {Input} name = 'user_phone' placeholder = 'Enter Your Phone Number *' iconPosition = 'left'/>
            </td>    
          </tr>
          <tr>
            <td colSpan={2}>
              <label className = "label" for = "Subject">Subject: </label>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Form.Field className = "input" id = 'input-subject' control ={Input} name = 'user_subject' placeholder = 'Enter Subject Here *' required/>
            </td>
          </tr>
          </table>

          <table>
          <tr>
            <td colSpan={2}>
              <label className = "label" for = "Message">Message: </label>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Form.Field className = "input" id = 'input-message' control ={TextArea} name = 'user_message' placeholder = 'Enter Message Here *' required/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
                <Button type = 'submit' color = 'green'>Send</Button>
            </td>
          </tr>
        </table>
      </Form>
    </div>
  );
  }
}
export default Contact;