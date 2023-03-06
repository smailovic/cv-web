import React, { useState } from 'react';

function AddDel() {
  const [numEducation, setNumEducation] = useState(1);
  const [numExperience, setNumExperience] = useState(1);
  const [education, setEducation] = useState([
    {
      uni: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    },
  ]);
  const [experience, setExperience] = useState([
    {
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
    },
  ]);

  const handleAddEducation = () => {
    setNumEducation(numEducation + 1);
    setEducation([
      ...education,
      { uni: '', city: '', degree: '', subject: '', from: '', to: '' },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const newEducation = [...education];
    newEducation.splice(index, 1);
    setNumEducation(numEducation - 1);
    setEducation(newEducation);
  };

  const handleAddExperience = () => {
    setNumExperience(numExperience + 1);
    setExperience([
      ...experience,
      { position: '', company: '', city: '', from: '', to: '' },
    ]);
  };

  const handleRemoveExperience = (index) => {
    const newExperience = [...experience];
    newExperience.splice(index, 1);
    setNumExperience(numExperience - 1);
    setExperience(newExperience);
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const newEducation = [...education];
    newEducation[index][name] = value;
    setEducation(newEducation);
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const newExperience = [...experience];
    newExperience[index][name] = value;
    setExperience(newExperience);
  };

  const educationItems = education.map((edu, index) => (
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

  const experienceItems = experience.map((exp, index) => (
    <div className="m-2 border" key={index}>
      <input
        className="form-control"
        name="position"
        placeholder="position"
        value={exp.position}
        onChange={(e) => handleExperienceChange(e, index)}
      />
      <input
        className="form-control"
        name="company"
        placeholder="company"
        value={exp.company}
        onChange={(e) => handleExperienceChange(e, index)}
      />
      <input
        className="form-control"
        name="city"
        placeholder="city"
        value={exp.city}
        onChange={(e) => handleExperienceChange(e, idnex)}
      />
      <input
        className="form-control"
        name="from"
        placeholder="from"
        value={exp.from}
        onChange={(e) => handleExperienceChange(e, index)}
      />
      <input
        className="form-control"
        name="to"
        placeholder="to"
        value={exp.to}
        onChange={(e) => handleExperienceChange(e, index)}
      />
      {index > 0 && (
        <button
          className="btn btn-dark"
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
      <h1>Education</h1>
      {educationItems}
      <button
        className="btn btn-warning"
        type="button"
        onClick={handleAddEducation}
      >
        Add Education
      </button>
      <hr />
      <h1>Experience</h1>
      {experienceItems}
      <button
        type="button"
        className="btn btn-warning"
        onClick={handleAddExperience}
      >
        Add Experience
      </button>
    </div>
  );
}

export default AddDel;
