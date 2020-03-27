/* Vendor imports */
import React from 'react'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import style from './index.module.less'


class Contact extends React.Component {

  render() {
   
    return (
      <Layout>
        <SEO
          title="Contact Page"
          description="A brief summary of this blog"
          path="contact"
        />
        <div className={style.container}>
        
          <div className={style.content}>
            <h1>Contact Us</h1>
         <p>Coming soon</p>
          
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
