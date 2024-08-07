import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div
      id='contact'
      className={`sm:px-[2rem] px-[1rem] lg:py-[2rem] py-[1rem] text-black ${styles.contactUs}`}
    >
      <h2 className='sm:text-[2.5rem] text-[#2463EB] text-[2rem] text-center font-bold'>
        Contact Us to Check Eligibility
      </h2>

      <form className={styles.form}>
        <input type='text' placeholder='Your Name' required />
        <input type='email' placeholder='Your Email' required />
        <textarea placeholder='Your Message' required></textarea>
        <button type='submit' className='sm:text-[1rem] text-[0.7rem]'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
