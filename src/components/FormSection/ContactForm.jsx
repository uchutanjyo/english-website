import  { useState, useRef } from "react";

import emailjs from "emailjs-com";
import { Form, Input,TextArea, Button } from './ContactForm.styles'


const ContactForm = ({ children }) => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs.sendForm(
      "service_7ugyzgd",
      "template_u8jvcfm",
      form.current,
      "CNPOcX_lOqJC8MPax"
    );
    alert("Your email has been sent.")
      // .then((result) => {
      //   console.log(result);
      // })
      // .catch((err) => console.log(err));
  };

  return (
    <>
      <Form ref={form} className="contact" action="submit">
        {/* <label htmlFor="name">Name</label> */}
        <Input type="text" id="name" name="user_name" />
        {/* <label htmlFor="name">E-mail address</label> */}
        <Input type="text" id="email" name="user_email" />
        {/* <label htmlFor="name" name="message">
          Message
        </label> */}
        <TextArea rows="10" id="message" name="message" />
        <Button action="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>

      <div className="hidden"></div>
    </>
  );
};

export default ContactForm;
