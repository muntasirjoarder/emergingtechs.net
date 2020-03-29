/* Vendor imports */
import React from 'react'
import style from './contact-form.module.less'

const ContactForm = (props) => (
  <section id="contact">
      <div className={style.contactform}>
          <section>     
          <form name="contact" action="/contact/thankyou" method="post" data-netlify="true" data-netlify-honeypot="bot-field"> 
          <input type="hidden" name="bot-field" /> 
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" required="" placeholder="Name" name="name" className={style.field} />
          <input type="email" required="" placeholder="Your email address" className={style.field} name="email" />
          <textarea required="" placeholder="Message" id="comments" className={style.field} name="comments"></textarea>
          <button name="login" type="submit" className={style.submitbtn}>Submit</button>
          </form>
          </section>
         
      </div>
  </section>
)

export default ContactForm