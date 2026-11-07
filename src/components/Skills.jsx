
function Skills({ t }) {
  const skills = t.skills

  return (
    <section id="skills" className="hiraya-section hiraya-skills">
      <div className="hiraya-container">

        <div className="hiraya-section-heading">
          <p className="hiraya-section-eyebrow">
            {skills.eyebrow}
          </p>

          <h2 className="hiraya-section-title">
            {skills.title}
          </h2>

          <p>{skills.description}</p>
        </div>

        <div className="hiraya-skills__grid">
          {skills.groups.map((group, index) => (
            <div className="hiraya-skill-group" key={group.title}>
              <div className="hiraya-skill-group__icon" aria-hidden="true">
                {['</>', 'CSS', 'Git', '508'][index]}
              </div>

              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <div className="hiraya-skill-group__tags">
                {group.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills

