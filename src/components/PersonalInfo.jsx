import React from 'react';
import './perso.css';
import './AddDel';

const PersonalInfo = (props) => {
  const { personal, education, experience, image } = props;

  console.log('this is PersonalINfo');
  console.log(education);
  const content = (
    <div className="personal-info">
      <div className="personal-info__header">
        <div className="personal-info__header-image bg-primary ">
          {image && <img className="image" src={image} alt="uploaded" />}
        </div>
        <div className="personal-info__header-details ">
          <div className="personal-info__header-description">
            <h2 className="personal-info__header-description-title border-bottom mb-3">
              Description
            </h2>
            <p className="personal-info__header-description-text"></p>
          </div>
          <div className="personal-info__header-contact">
            <div className="personal-info__header-contact-image "></div>
            <div className="personal-info__header-contact-details">
              <h2 className="personal-info__header-contact-title">
                Personal Details
              </h2>
              <p className="personal-info__header-contact-text">
                {personal.first} {personal.last}
              </p>
              <p className="personal-info__header-contact-text">
                {personal.title}
              </p>
              <p className="personal-info__header-contact-text">
                Address: {personal.address}
              </p>
              <p className="personal-info__header-contact-text">
                Phone: {personal.phone}
              </p>
              <p className="personal-info__header-contact-text">
                Email: {personal.email}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="personal-info__content p-3 border bg-light">
        <div className="personal-info__experience">
          <h2 className="personal-info__experience-title border-bottom text-dark mb-3">
            Experience
          </h2>
          {Object.values(experience).map((exp, index) => (
            <div key={index}>
              <p className="personal-info__experience-position">
                {exp.position}
              </p>
              <p className="personal-info__experience-company">{exp.company}</p>
              <p className="personal-info__experience-city">{exp.city}</p>
              <p className="personal-info__experience-period">
                {exp.from} - {exp.to}
              </p>
            </div>
          ))}
        </div>
        <div className="personal-info__education">
          <h2 className="personal-info__education-title border-bottom text-dark mb-3">
            Education
          </h2>
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
        </div>
      </div>
    </div>
  );
  return <>{content}</>;
};

export default PersonalInfo;