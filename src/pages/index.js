import React from "react";


export default ({ data }) => (
  <div>
    <h1>Home: {data.site.siteMetadata.title}</h1>
    <div>
      <p>
        This website is created with gatsby.js and react.js, gatsby is a static site generator. It gives you the abillity to maintain a website without a database and/or
        serverside porcesses. I used markdown-files(.md) as content management system, GraphQL as query language to get the data from the .md- files and Reacts component structure is
        used to build the static templates. This website is originally created from a tutorial from the Gatsby website, for more information about me or this website click one of the links below:
        <ul>
          <li><a target="_blank" href="http://stevenkoerts.nl/">Portfolio</a></li>
          <li><a target="_blank" href="https://github.com/Steven24K">Github</a></li>
          <li><a target="_blank" href="https://www.gatsbyjs.org/">Gatsby</a></li>
          <li><a target="_blank" href="https://reactjs.org/">React</a></li>
          <li><a target="_blank" href="https://github.com/Steven24K/First-Gatsby-blog">Source Code</a></li>
          <li><a target="_blank" href="https://www.gatsbyjs.org/tutorial/">Gatsby tutorial</a></li>
        </ul>
      </p>
    </div>
  </div>
);

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `