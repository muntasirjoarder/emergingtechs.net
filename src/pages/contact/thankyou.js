/* Vendor imports */
import React from 'react'
/* App imports */
import Layout from '../../components/layout'
import ContactForm from '../../components/contact-form'
import SEO from '../../components/seo'
import style from './index.module.less'


class Thankyou extends React.Component {

  render() {
   
    return (
      <Layout>
        <SEO
          title="Thank you Page"
          description="A page to thank your customer"
          path="contact/gthankyou"
        />
        <div className={style.container}>
        
          <div className={style.content}>
            <h1>Contact Us</h1>
         <p>Thank you for contacting us. Someone will contact you as soon as possible.</p>
         
          
          </div>
        </div>
      </Layout>
    )
  }
}

export default Thankyou
