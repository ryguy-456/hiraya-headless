function About() {
  return (
    <section id="about" className="hiraya-section hiraya-about">
      <div className="hiraya-container">

        <div className="hiraya-section-heading">
          <p className="hiraya-section-eyebrow">About Me</p>

          <h2 className="hiraya-section-title">
            Building better web experiences with Drupal.
          </h2>
        </div>

        <div className="hiraya-about__content">

          <p>
            I'm Ryan Buenconsejo, a Drupal Developer and Web Experience
            Specialist focused on building accessible, maintainable, and
            user-centered digital experiences.
          </p>

          <p>
            I have hands-on experience developing and supporting enterprise
            Drupal websites, working with content architecture, custom
            components, Twig templating, accessibility, and deployment
            workflows.
          </p>

          <p>
            My approach combines strong CMS knowledge with practical
            front-end development and a focus on creating experiences that
            are reliable for both users and the teams who maintain them.
          </p>

        </div>

        <div className="hiraya-about__stats">

          <div className="hiraya-stat">
            <strong>7+</strong>
            <span>Years Web Experience</span>
          </div>

          <div className="hiraya-stat">
            <strong>Drupal 8–11</strong>
            <span>Enterprise CMS</span>
          </div>

          <div className="hiraya-stat">
            <strong>WCAG / 508</strong>
            <span>Accessibility</span>
          </div>

          <div className="hiraya-stat">
            <strong>Pantheon</strong>
            <span>Deployment Platform</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About
