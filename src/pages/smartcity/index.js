/* Vendor imports */
import React from 'react'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import style from './index.module.less'


class Smartcity extends React.Component {

  render() {
   
    return (
      <Layout>
        <SEO
          title="About Smart City IoT"
          description="A brief summary of Smart City services"
          path="smartcity"
        />
        <div className={style.container}>
        
          <div className={style.content}>
            <h1>Smart City IoT</h1>
         <p>Coming soon</p>
          
          </div>
        </div>
      </Layout>
    )
  }
}

export default Smartcity
