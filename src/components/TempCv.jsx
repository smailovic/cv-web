import React from 'react';
// import './orbit-3.css';

export default function TempCv(props) {
  const { personal, education, experience, image } = props;

  return (
    <div className="wrapper mt-lg-5">
      <div className="sidebar-wrapper">
        <div className="profile-container">
          <img className="profile" src="assets/images/profile.png" alt="" />
          {image && (
            <img className="image profile " src={image} alt="uploaded" />
          )}
          <h1 className="name">
            {personal.first} {personal.last}
          </h1>
          <h3 className="tagline">{personal.title}</h3>
        </div>

        <div className="contact-container container-block">
          <ul className="list-unstyled contact-list">
            <li className="email">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto: yourname@email.com"> {personal.email}</a>
            </li>
            <li className="phone">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:0123 456 789">{personal.phone}</a>
            </li>
            <li className="website">
              <i className="fa-solid fa-globe"></i>
              <a
                href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/"
                target="_blank"
              >
                portfoliosite.com
              </a>
            </li>
            <li className="linkedin">
              <i className="fa-brands fa-linkedin-in"></i>
              <a href="#" target="_blank">
                linkedin.com/in/alandoe
              </a>
            </li>
            <li className="github">
              <i className="fa-brands fa-github"></i>
              <a href="#" target="_blank">
                github.com/username
              </a>
            </li>
            <li className="twitter">
              <i className="fa-brands fa-twitter"></i>
              <a href="https://twitter.com/3rdwave_themes" target="_blank">
                @twittername
              </a>
            </li>
          </ul>
        </div>
        {Object.values(education).map((edu, index) => (
          <div key={index} className="education-container container-block">
            <h2 className="container-block-title">Education</h2>
            <div className="item">
              <h4 className="degree">
                {' '}
                {edu.degree} {edu.subject}
              </h4>
              <h5 className="meta">
                {edu.uni} {edu.city}
              </h5>
              <div className="time">
                {' '}
                {edu.from} - {edu.to}
              </div>
            </div>
          </div>
        ))}
        <div className="languages-container container-block">
          <h2 className="container-block-title">Languages</h2>
          <ul className="list-unstyled interests-list">
            <li>
              English <span className="lang-desc">(Native)</span>
            </li>
            <li>
              French <span className="lang-desc">(Professional)</span>
            </li>
            <li>
              Spanish <span className="lang-desc">(Professional)</span>
            </li>
          </ul>
        </div>

        <div className="interests-container container-block">
          <h2 className="container-block-title">Interests</h2>
          <ul className="list-unstyled interests-list">
            <li>Climbing</li>
            <li>Snowboarding</li>
            <li>Cooking</li>
          </ul>
        </div>
      </div>

      <div className="main-wrapper">
        <section className="section summary-section">
          <h2 className="section-title">
            <span className="icon-holder">
              <i className="fa-solid fa-user"></i>
            </span>
            Career Profile
          </h2>
          <div className="summary">
            <p>
              Summarise your career here lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. You can{' '}
              <a
                href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/"
                target="_blank"
              >
                download this free resume/CV template here
              </a>
              . Aenean commodo ligula eget dolor aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.
            </p>
          </div>
        </section>

        <section className="section experiences-section">
          <h2 className="section-title">
            <span className="icon-holder">
              <i className="fa-solid fa-briefcase"></i>
            </span>
            Experiences
          </h2>
          {Object.values(experience).map((exp, index) => (
            <div key={index} className="item">
              <div className="meta">
                <div className="upper-row">
                  <h3 className="job-title">{exp.position}</h3>
                  <div className="time">
                    {' '}
                    {exp.from} - {exp.to}
                  </div>
                </div>
                <div className="company">
                  {exp.company}, {exp.city}
                </div>
              </div>
              <div className="details">
                <p>
                  Describe your role here lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus. Donec quam
                  felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  Nulla consequat massa quis enim. Donec pede justo.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.{' '}
                </p>
              </div>
            </div>
          ))}
          <div className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Senior Software Engineer</h3>
                <div className="time">2018 - 2022</div>
              </div>
              <div className="company">Google, London</div>
            </div>
            <div className="details">
              <p>
                Describe your role here lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem.
              </p>
            </div>
          </div>

          <div className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">UI Developer</h3>
                <div className="time">2016 - 2018</div>
              </div>
              <div className="company">Amazon, London</div>
            </div>
            <div className="details">
              <p>
                Describe your role here lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem.
              </p>
            </div>
          </div>
        </section>

        <section className="skills-section section">
          <h2 className="section-title">
            <span className="icon-holder">
              <i className="fa-solid fa-rocket"></i>
            </span>
            Skills &amp; Proficiency
          </h2>
          <div className="skillset">
            <div className="item">
              <h3 className="level-title">Python &amp; Django</h3>
              <div className="progress level-bar">
                <div
                  className="progress-bar theme-progress-bar"
                  role="progressbar"
                  //   style="width: 99%"
                  aria-valuenow="99"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="item">
              <h3 className="level-title">Javascript</h3>
              <div className="progress level-bar">
                <div
                  className="progress-bar theme-progress-bar"
                  role="progressbar"
                  //   style="width: 98%"
                  aria-valuenow="98"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="item">
              <h3 className="level-title">React &amp; Angular</h3>
              <div className="progress level-bar">
                <div
                  className="progress-bar theme-progress-bar"
                  role="progressbar"
                  //   style="width: 98%"
                  aria-valuenow="98"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="item">
              <h3 className="level-title">HTML5 &amp; CSS</h3>
              <div className="progress level-bar">
                <div
                  className="progress-bar theme-progress-bar"
                  role="progressbar"
                  //   style="width: 95%"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="item">
              <h3 className="level-title">Ruby on Rails</h3>
              <div className="progress level-bar">
                <div
                  className="progress-bar theme-progress-bar"
                  role="progressbar"
                  //   style="width: 85%"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="item">
              <h3 className="level-title">Sketch &amp; Photoshop</h3>
              <div className="progress level-bar">
                <div
                  className="progress-bar theme-progress-bar"
                  role="progressbar"
                  //   style="width: 60%"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
