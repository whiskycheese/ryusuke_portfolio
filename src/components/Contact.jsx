import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SeahorseCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = (props) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({...form, [name] : value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


// template_2uada8d
// service_8tkotw6
// 3ARfdCHK_IOK2CyAS
    emailjs.send(
      'service_8tkotw6',
      'template_2uada8d',
      {
        from_name: form.name,
        to_name: 'Ryusuke',
        from_email: form.email,
        to_email: 'ryusuke503@gmail.com',
        message: form.message
      },
      '3ARfdCHK_IOK2CyAS'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
        
        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.');
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-primary p-8 rounded-3xl border-8 border-accent shadow-xl shadow-[#e5ae63]"
      >
        <p className={`${styles.sectionSubText} text-center`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-center`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-secondary font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-secondary py-4 px-6 placeholder:text-white text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-secondary font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-secondary py-4 px-6 placeholder:text-white text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-secondary font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-secondary py-4 px-6 placeholder:text-white text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#00cea8] px-8 py-3 outline-none w-fit text-white font-bold shadow-md shadow-[#000] rounded-xl mx-auto hover:opacity-50"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[400px]"
      >
        <SeahorseCanvas />
      </motion.div>
    </div>  
  )
}

export default SectionWrapper(Contact, "contact")