import React, { useState } from 'react';

function AddDel(props) {
  const { education, setEducation, experience, setExperience } = props;

  const [numEducation, setNumEducation] = useState(1);
  const [numExperience, setNumExperience] = useState(1);

  const handleAddEducation = () => {
    setNumEducation(numEducation + 1);
    setEducation({
      ...education,
      [numEducation]: {
        uni: ' ',
        city: ' ',
        degree: ' ',
        subject: ' ',
        from: ' ',
        to: ' ',
      },
    });
  };

  const handleRemoveEducation = (index) => {
    const newEducation = { ...education };
    delete newEducation[index];
    setNumEducation(numEducation - 1);
    setEducation(newEducation);
  };

  const handleAddExperience = () => {
    setNumExperience(numExperience + 1);
    setExperience({
      ...experience,
      [numExperience]: {
        position: ' ',
        company: ' ',
        city: ' ',
        from: ' ',
        to: ' ',
      },
    });
  };

  const handleRemoveExperience = (index) => {
    const newExperience = { ...experience };
    delete newExperience[index];
    setNumExperience(numExperience - 1);
    setExperience(newExperience);
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const newEducation = { ...education };
    newEducation[index][name] = value;
    setEducation(newEducation);
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const newExperience = { ...experience };
    newExperience[index][name] = value;
    setExperience(newExperience);
  };

  const educationItems = Object.values(education).map((edu, index) => (
    <div className="m-2" key={index}>
      <input
        className="form-control"
        name="uni"
        value={edu.uni}
        onChange={(e) => handleEducationChange(e, index)}
        placeholder="university"
      />
      <input
        className="form-control"
        name="city"
        value={edu.city}
        onChange={(e) => handleEducationChange(e, index)}
        placeholder="city"
      />
      <input
        className="form-control"
        name="degree"
        value={edu.degree}
        placeholder="degree"
        onChange={(e) => handleEducationChange(e, index)}
      />
      <input
        className="form-control"
        name="subject"
        placeholder="subject"
        value={edu.subject}
        onChange={(e) => handleEducationChange(e, index)}
      />
      <input
        className="form-control"
        name="from"
        value={edu.from}
        placeholder="from"
        onChange={(e) => handleEducationChange(e, index)}
      />
      <input
        className="form-control"
        name="to"
        placeholder="to"
        value={edu.to}
        onChange={(e) => handleEducationChange(e, index)}
      />
      {index > 0 && (
        <button
          className="btn my-2 btn-dark"
          type="button"
          onClick={() => handleRemoveEducation(index)}
        >
          Remove Education
        </button>
      )}
    </div>
  ));

  const experienceItems = Object.values(experience).map((exp, index) => (
    <div className="m-2" key={index}>
      <input
        className="form-control"
        name="position"
        value={exp.position}
        onChange={(e) => handleExperienceChange(e, index)}
        placeholder="position"
      />
      <input
        className="form-control"
        name="company"
        value={exp.company}
        onChange={(e) => handleExperienceChange(e, index)}
        placeholder="company"
      />
      <input
        className="form-control"
        name="city"
        value={exp.city}
        onChange={(e) => handleExperienceChange(e, index)}
        placeholder="city"
      />
      <input
        className="form-control"
        name="from"
        value={exp.from}
        onChange={(e) => handleExperienceChange(e, index)}
        placeholder="from"
      />
      <input
        className="form-control"
        name="to"
        value={exp.to}
        onChange={(e) => handleExperienceChange(e, index)}
        placeholder="to"
      />
      {index > 0 && (
        <button
          className="btn my-2 btn-dark"
          type="button"
          onClick={() => handleRemoveExperience(index)}
        >
          Remove Experience
        </button>
      )}
    </div>
  ));

  return (
    <div>
      <div className="m-2">
        <button
          className="btn btn-dark"
          type="button"
          onClick={handleAddEducation}
        >
          Add Education
        </button>
      </div>
      {educationItems}
      <div className="m-2">
        <button
          className="btn btn-dark"
          type="button"
          onClick={handleAddExperience}
        >
          Add Experience
        </button>
      </div>
      {experienceItems}
    </div>
  );
}

export default AddDel;
