import React from "react";

export default ({ data }) =>
  <div>
    <h1>
      About:  {data.site.siteMetadata.title}
    </h1>
    <p>
      Why did I choose to build a website with Gatsby? The first website I build was with PHP, CSS(Bootstrap), JQuery and HTML, I also used a MySQL database. 
      The big disadvantage of this was that it required verry complex systems and opperations to manage of all of that, things like a complicated content management system with CRuD opperations, a FTP explorer 
      to manage files on the server, cofiguration of a database and all of that just for a simple portfolio website. What I wanted was a verry simplistic content management system so I could simple add and edit my information
      and easily could upload new content, such as new projects and blog articles. I want to do this without having to log in to my webhosting account. <br/>
      
       After a lot of approaches of building the for me "perfect" content management system, I finally stummbled uppon Gatsby. Gatsby solves a lot of problems you have to deal with when it comes to static site creating. 
       Here a couple of problems: <br/><br/>

       <h3>1. Javascript cannot access files on the server</h3>
       Because of security reasons Javascript is not able to acces the computers local file system, because you don't every website to see your personal photo's. Gatsby makes it possible to query data from local markdown files, 
       this was exactly something I was looking for, this way I can just add new files to a folder to add new content to my website.

       <br/><br/>

       <h3>2. How to deal with Server Side Includes with Javascript?</h3>
       When I was using PHP it was prety easy to include shared layouts over all the pages, but with only Javascript it was sometimes a real headache. There are plenty of ways to do it, using dynamic HTML, 
       AJAX includes or JQuery but all of these options had a lot of side effects and didn't come with complete functionallity. It is clearly that JQuery is not created as a substitute for server side processes, I also 
       have used the React Router wich is one the best sollutions for so far, but the shared layout of Gatsby was the best sollution for me.

       <br/><br/>

       <h2>Conclusion</h2>
       Well, I've tried multiple approaches for creating a simple portfolio website from just static HTML pages to a full MVC application with MySQL database. Some approaches were to bad that they 
       didn't last longer than a few wekes. With the discovering of Gatsby I realy hope that search for the best framework has come to an end and that this new approach will last longer than any other.
        
       <br/><br/>

       <i>#GatsbyIsAwesome</i>

    </p>
  </div>

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `