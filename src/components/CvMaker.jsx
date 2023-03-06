import React, { useState } from 'react';
import $ from 'jquery';
import AddDel from './AddDel';
import PersonalInfo from './PersonalInfo';

export default function CvMaker() {
  const [personal, setPersonal] = useState({
    first: '',
    last: '',
    title: '',
    photo: '',
    adress: '',
    phone: '',
    email: '',
    description: '',
  });
  const [education, setEducation] = useState({
    uni: '',
    city: '',
    degree: '',
    subject: '',
    from: '',
    to: '',
  });
  const [experience, setExperience] = useState({
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonal((prevPersonal) => ({ ...prevPersonal, [name]: value }));
    setEducation((prevEducation) => ({ ...prevEducation, [name]: value }));
    setExperience((prevExperience) => ({ ...prevExperience, [name]: value }));
    console.log(personal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(personal, education, experience);
  };
  const [showEduSection, setShowEduSection] = useState(true);
  const [showExpSection, setShowExpSection] = useState(true);

  const handleEduSectionToggle = () => {
    setShowEduSection(!showEduSection);
  };

  const handleExpSectionToggle = () => {
    setShowExpSection(!showExpSection);
  };

  const loadExample = () => {
    setPersonal({
      first: 'Smael',
      last: 'Draoui',
      title: 'Front-end master',
      photo: '',
      adress: 'IM SALMA AP15 ETAGE 3 AV SAMOUNI',
      phone: '+212 648075134',
      email: 'smaelcv@gmail.com',
      description: 'i will change this to text area and style it',
    });
    setEducation({
      uni: 'Moulay Smael university',
      city: 'Meknes',
      degree: 'liscence fondamentales en informatique',
      subject: 'i dunno chnahya had subject',
      from: '2018',
      to: '2022',
    });
    setExperience({
      position: 'Front-end developer',
      company: 'Freelance clients',
      city: 'Meknes, Rabat, Tanger',
      from: '2013',
      to: '2018',
    });
  };

  return (
    <div>
      <section className="bg-light">
        <header>
          <div className="bg-dark p-5 ">
            <h1 className="text-warning text-center border-end border-start">
              CV Maker
            </h1>
          </div>
        </header>
        <form onSubmit={handleSubmit} className="container mt-2">
          <section className="bg-light border border-light border-2 form-group">
            <h1 id="app">Personal Information</h1>
            <div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="first name"
                  value={personal.first}
                  onChange={handleChange}
                  name="first"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="last name"
                  value={personal.last}
                  onChange={handleChange}
                  name="last"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="title"
                  value={personal.title}
                  onChange={handleChange}
                  name="title"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="file"
                  placeholder="photo"
                  value={personal.photo}
                  name="photo"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="adress"
                  value={personal.adress}
                  onChange={handleChange}
                  name="adress"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="phone"
                  value={personal.phone}
                  onChange={handleChange}
                  name="phone"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="email"
                  value={personal.email}
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="description"
                  value={personal.description}
                  onChange={handleChange}
                  name="description"
                />
              </div>
            </div>
          </section>
          <AddDel />
        </form>
        <button className="btn btn-primary m-2" onClick={loadExample}>
          Load Example
        </button>
      </section>
      <div className="my-3 bg-light">
        <PersonalInfo
          personal={personal}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
}
///////////////////////////////
