/* Vendor imports */
import React from 'react'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import style from './index.module.less'


class Smarthome extends React.Component {

  render() {
   
    return (
      <Layout>
        <SEO
          title="About Smart Home"
          description="A brief summary of Smart Home services"
          path="smarthome"
        />
        <div className={style.container}>
        
          <div className={style.content}>
            <h1>Smart Home Automation</h1>
         <p>Coming soon</p>
          
          </div>
        </div>
      </Layout>
    )
  }
}

export default Smarthome
