import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import axios from 'axios';

import { PROFILE_DATA } from '../utils/data';
import { IoMdMail } from 'react-icons/io';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';

function Contact() {

  // tosumit
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  // const handleSubmit = async (e) => {
  //   e.preventDefault();


  //   const serviceId = 'service_tf7angf';
  //   const templateId = 'template_jd5kk2w';
  //   const publicKey = 'StQ0eswwJqAtGYfvy';

  //   // Send email using EmailJS
  //   const data = {
  //     service_id: serviceId,
  //     template_id: templateId,
  //     user_id: publicKey,
  //     template_params: {
  //       from_name: fullname,
  //       from_email: email,
  //       to_name: "Dharmbir Roy",
  //       message: message,
  //     }
  //   };

  //   try {

  //     // Submit form data to Formspree using Axios
  //     const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
  //     console.log('Response:', res.data);

  //       setFullName("");
  //       setEmail("");
  //       setMessage("");

  //       alert('Message sent successfully!');

  //   } catch (error) {
  //     console.error('Error sending message:', error);
  //     alert('Failed to send message.');
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_tf7angf';
    const templateId = 'template_s4xnuai';
    const publicKey = 'StQ0eswwJqAtGYfvy';

    const templateParams ={
      from_name: fullname,
      from_email: email,
      to_name: "Dharmbir Roy",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) =>{
      console.log('Email sent successfully!', response);
      setFullName('');
      setEmail('');
      setMessage('');
      alert('Email send Successfully ! ....🙂');
    })
    .catch((error) => {
      console.log('Error sending email:', error);
      alert('Email not send...🧐');
    });


  }

  return (
    <section className=' max-w-screen-xl mx-auto px-6 pb-20' id='contact'>
      <h5 className=' text-primary text-2xl md:text-4xl font-semibold text-center pb-8 md:pb-14'>
        Contact
      </h5>

      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16'>
        <div>
          <ContactInfoCard icon={<IoMdMail />} text={PROFILE_DATA.email} />
          <ContactInfoCard icon={<IoPhonePortraitOutline />} text={PROFILE_DATA.phone} />
          <ContactInfoCard icon={<FaLinkedin />} text={PROFILE_DATA.linkdin} />
        </div>

        <div>
          <h5 className=' md:hidden text-cyan-300 text-lg font-medium mt-4 pb-5'>Contact Form</h5>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <input
              type="text"
              name='fullname'
              placeholder='Full Name'
              id=''
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              className='input-box'
              autoComplete='off'
              required
            />

            <input
              type="email"
              name='email'
              placeholder='Email'
              id=''
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='input-box'
              autoComplete='off'
            />

            <textarea
              name="message"
              placeholder='Message'
              id=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              row="3"
              className='input-box'
              autoComplete='off'
              required
            ></textarea>

            <button type='submit' className='primary-btn'>SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className='flex items-center gap-5 bg-gradient-to-br from-blue-950 to-slate-900 rounded border border-blue-800/40 px-4 py-3 mb-5'>
      <div className='w-10 h-10 text-xl text-cyan-300 flex items-center justify-center bg-sky-950 rounded border border-cyan-700'>{icon}</div>

      <p className='text-cyan-100 text-xs md:text-sm'>{text}</p>
    </div>
  )
}

export default Contact