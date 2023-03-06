import React from 'react';
import './perso.css';
import PDFButton from './PDFButton';
import './AddDel';

const PersonalInfo = ({ personal, education, experience }) => {
  const content = (
    <div className="personal-info">
      <div className="personal-info__header">
        <div className="personal-info__header-image bg-primary p-5"></div>
        <div className="personal-info__header-details ">
          <div className="personal-info__header-description">
            <h2 className="personal-info__header-description-title border-bottom mb-3">
              Description
            </h2>
            <p className="personal-info__header-description-text">
              {personal.description}
            </p>
          </div>
          <div className="personal-info__header-contact">
            <div className="personal-info__header-contact-image ">
              {personal.image}
            </div>
            <div className="personal-info__header-contact-details">
              <h2 className="personal-info__header-contact-title">
                Personal Details
              </h2>
              <p className="personal-info__header-contact-text">
                {personal.firstName} {personal.lastName}
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
          <p className="personal-info__experience-position">
            {experience.position}
          </p>
          <p className="personal-info__experience-company">
            {experience.company}
          </p>
          <p className="personal-info__experience-city">{experience.city}</p>
          <p className="personal-info__experience-period">
            {experience.from} - {experience.to}
          </p>
        </div>
        <div className="personal-info__education">
          <h2 className="personal-info__education-title border-bottom text-dark mb-3">
            Education
          </h2>
          <p className="personal-info__education-university">{education.uni}</p>
          <p className="personal-info__education-city">{education.city}</p>
          <p className="personal-info__education-degree">{education.degree}</p>
          <p className="personal-info__education-subject">
            {education.subject}
          </p>
          <p className="personal-info__education-period">
            {education.from} - {education.to}
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {content}
      <PDFButton content={content} />
    </>
  );
};

export default PersonalInfo;
