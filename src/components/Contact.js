import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';

const SERVICE_ID = "service_skxc6er";
const TEMPLATE_ID = "template_x4wgm6s";
const USER_ID = "user_DP2qwbX5GzDttMrWgLp6E";

export default function Contact() {


  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        alert("Email was sent")
      }, (error) => {
        console.log(error.text);
        alert("something went wrong")
      });
    e.target.reset()
  };

    return (
      <section id="contact" className="relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  Adelaide, Australia
                </h2>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed">
                  myleswatkinson1@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">0466-722-197</p>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  LinkedIn
                </h2>
                <a href="https://www.linkedin.com/in/myles-watkinson-b76a25219/">
                <p className="leading-relaxed">Click here to find me!</p>
                </a>
              </div>
            </div>
          </div>
            <div className="applicatin">
              <Form 
              className="lg:w-2/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
              onSubmit={handleOnSubmit}>
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                  Email me
                </h2>
                <Form.Field
                  id='form-input-control-email'
                  control={Input}
                  label='Email'
                  name='user_email'
                  placeholder='Email…'
                  required
                  icon='mail'
                  iconPosition='left'
                />
                <Form.Field
                  id='form-input-control-last-name'
                  control={Input}
                  label='Name'
                  name='user_name'
                  placeholder='Name…'
                  required
                  icon='user circle'
                  iconPosition='left'
                />
                <Form.Field
                  id='form-textarea-control-opinion'
                  control={TextArea}
                  label='Message'
                  name='user_message'
                  placeholder='Message…'
                  required
                />
                <Button type='submit' color='green'>Submit</Button>
              </Form>
            </div>
          </div>
        </section>
  );
}