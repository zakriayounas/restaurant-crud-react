import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <section>
        <h2>About Me</h2>
        <p>
          Add some information about yourself, your skills, experience, or any other details you want to share.
        </p>
      </section>
      <section>
        <h2>Projects</h2>
        <div className="projects">
          {/* Add your project components or descriptions here */}
          {/* Example project component */}
          <div className="project">
            <h3>Project Title</h3>
            <p>Project description</p>
            
          </div>
        </div>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Add your contact information here, such as email, phone number, or social media links.
        </p>
      </section>
      <footer>
        <p>© 2023 Your Name</p>
      </footer>
    </div>
  );
}

export default Portfolio;
