require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_PROPERTY_ID, 
        ],
      
        pluginConfig: {
          head:true,
         
        },
      },
    },
  ],
  siteMetadata:{
    title:"Dante's Portfolio",
    description:"Portfolio website created by Dante Davidson Daniele",
    keywords:"Portfolio, web development, developer, Dante",
    
    
  }
}
