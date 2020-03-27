/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Utils from '../../utils'
import style from './index.module.less'

export const aboutPropTypes = {
  data: PropTypes.shape({
    profilePhoto: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    flagIt: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.object.isRequired,
      }),
    }),
    flagEn: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.object.isRequired,
      }),
    }),
    skillIcons: PropTypes.object.isRequired,
    toolIcons: PropTypes.object.isRequired,
  }),
}

class About extends React.Component {
  static propTypes = aboutPropTypes

  render() {
    let { profilePhoto, flagIt, skillIcons, toolIcons } = this.props.data
    return (
      <Layout>
        <SEO
          title="About"
          description="A brief summary of this blog"
          path="about"
        />
        <div className={style.container}>
        
          <div className={style.content}>
            <h1>An IoT Solutions Company</h1>
         
            <p>Emergingtechs.net, as the name implies, works with the advanced emerging technology stacks to provide end to end solutions for its clients. Our expertise are in Smart City IoT and Smart Home Automation.</p>
            <p>We have extensive experience in working in Local government sector implementing Smart City IoT architecture and use cases.</p>
           <h2>Services</h2>
           <div className={style.services}>
           <strong>Smart Home Automation</strong>
           <ul>
             <li>Smart Home solution</li>
             <li>Smart Home products</li>
             <li>Home Assistant Hub</li>
           </ul>
           <strong>Consultancy</strong>
           <ul>
             <li>IoT Integration and Proof-of-Concept(PoC)</li>
             <li>Device selection</li>
             <li>IoT Application Platform</li>
             <li>LPWAN (Low Power Wide Area Network)</li>
             <li>IoT feasibility study, specification and tender evaluation</li>
           </ul>
           <strong>IoT Architecture and SOP</strong>
           <ul>
             <li>Smart City IoT data modelling</li>
             <li>Implement IoT architecture in cloud</li>
             <li>IoT SOP (Standard Operating Procedure)</li>
           </ul>
        
           <strong>LoRaWAN Network Implementation</strong>
           <ul>
             <li>LoRaWAN network rollout</li>
             <li>Public/Private IoT network cloud</li>
             <li>Network Asset information management</li>
           </ul>
           <strong>Managed Services</strong>
           <ul>
             <li>IoT Network Cloud (i.e The Things Network,Senet etc) </li>
             <li>IoT Application Platform</li>
             <li>Other IoT related 3rd party platforms</li>
           </ul>
            </div>
            <br />
           
            <h2>Expertise</h2>
            <ImageList edges={skillIcons.edges} />
          
           
          </div>
        </div>
      </Layout>
    )
  }
}

export const imageListPropTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        name: PropTypes.string.isRequired,
        childImageSharp: PropTypes.shape({
          fixed: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
}

class ImageList extends React.Component {
  static propTypes = imageListPropTypes

  render = () => (
    <div className={style.iconsContainer}>
      {this.props.edges
        .sort((edgeA, edgeB) =>
          edgeA.node.name.toLowerCase() > edgeB.node.name.toLowerCase() ? 1 : -1
        )
        .map(({ node: { name, childImageSharp } }) => (
          <div className={style.iconWrapper} key={name}>
            <Img
              fixed={childImageSharp.fixed}
              alt={name + ' logo'}
              title={name}
            />
            <label>
              {iconsNameMap[name] ? iconsNameMap[name] : Utils.capitalize(name)}
            </label>
          </div>
        ))}
    </div>
  )
}

export const query = graphql`
  {
    profilePhoto: file(name: { eq: "profile-photo" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    flagIt: file(name: { eq: "flag-it" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    skillIcons: allFile(filter: { dir: { regex: "/about/skills$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
    toolIcons: allFile(filter: { dir: { regex: "/about/tools$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
// Use to set specific icons names
export const iconsNameMap = {
  ttn: 'TTN',
  lorawan: 'LoRaWAN',
  iot: 'IoT',
  nodejs: 'Node.js',
  gatsby: 'Gatsby.js',
  powerbi: 'Power BI',
  smartcity: 'Smart City',
  smarthomefreepik: 'Smart Home',
  react: 'React JS',
  homeassistant: 'Home Assistant',
  nodered: 'Node-RED'
}

export default About
