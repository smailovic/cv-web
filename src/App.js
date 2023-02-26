import React, { Component } from 'react';
import './style.css';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalInfo from './components/PersonalInfo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        first: '',
        last: '',
        title: '',
        photo: '',
        adress: '',
        phone: '',
        email: '',
        description: '',
      },
      education: {
        uni: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
      },
      experience: {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      personal: { ...this.state.personal, [e.target.name]: e.target.value },
      education: { ...this.state.education, [e.target.name]: e.target.value },
      experience: { ...this.state.exper, [e.target.name]: e.target.value },
    });
    console.log(this.state.personal);
  };
  handleSubmit = (e) => {
    const { personal, education, experience } = this.state;

    e.preventDefault();
  };

  deleteSection() {
    $('.del').click(() => $('.edu').hide());
  }
  deleteSectionTwo() {
    $('.del2').click(() => $('#exp').hide());
  }
  addSection() {
    $('#add1').click(() => $('.edu').show());
  }
  addSection2() {
    $('#add2').click(() => $('#exp').show());
  }
  loadexample = () => {
    //how do i do this?
    const { personal, education, experience } = this.state;
    this.setState({
      personal: {
        first: 'Smael',
        last: 'Draoui',
        title: 'Front-end master',
        photo: '',
        adress: 'IM SALMA AP15 ETAGE 3 AV SAMOUNI',
        phone: '+212 648075134',
        email: 'smaelcv@gmail.com',
        description: 'i will change this to text area and style it',
      },
      education: {
        uni: 'Moulay Smael university',
        city: 'Meknes',
        degree: 'liscence fondamentales en informatique',
        subject: 'i dunno chnahya had subject',
        from: 2018,
        to: 2022,
      },
      experience: {
        position: 'Front-end developer',
        company: 'Freelance clients',
        city: 'Meknes, Rabat, Tanger',
        from: '2013',
        to: '2018',
      },
    });
  };
  render() {
    const { personal, education, experience } = this.state;
    return (
      <section className="bg-light">
        <header>
          <div className="bg-dark p-5 ">
            <h1 i className="text-warning text-center border-end border-start">
              CV Maker
            </h1>
          </div>
        </header>
        <form onSubmit={this.handleSubmit} className="container mt-2">
          <section className="bg-light border border-light border-2 form-group">
            <h1 id="app">Personal Information</h1>
            <div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="first name"
                  value={personal.first}
                  onChange={this.handleChange}
                  name="first"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="last name"
                  onChange={this.handleChange}
                  value={personal.last}
                  name="last"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="title"
                  value={personal.title}
                  onChange={this.handleChange}
                  name="title"
                />
              </div>
              <div className="m-2">
                Image
                <input
                  className="form-control"
                  type="file"
                  placeholder="photo"
                  accept="image/*"
                  onChange={this.handleChange}
                  name="photo"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Adress"
                  value={personal.adress}
                  onChange={this.handleChange}
                  name="adress"
                />
              </div>

              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Phone number"
                  value={personal.phone}
                  onChange={this.handleChange}
                  name="phone"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  value={personal.email}
                  onChange={this.handleChange}
                  name="email"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Description"
                  value={personal.description}
                  onChange={this.handleChange}
                  name="description"
                />
              </div>
            </div>

            <div className="edu">
              <h1>Education</h1>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="University name"
                  value={education.uni}
                  onChange={this.handleChange}
                  name="uni"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="city"
                  value={education.city}
                  onChange={this.handleChange}
                  name="city"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Degree"
                  value={education.degree}
                  onChange={this.handleChange}
                  name="degree"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="subject"
                  value={education.subject}
                  onChange={this.handleChange}
                  name="subject"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="from"
                  value={education.from}
                  onChange={this.handleChange}
                  name="from"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="to"
                  value={education.to}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="container">
              <div
                onClick={this.deleteSection}
                className="del btn form-control  bg-dark text-light text-center p-2 mb-2 rounded"
              >
                delete
              </div>
              <div
                id="add1"
                onClick={this.addSection}
                className=" bg-dark text-light text-center p-2 rounded"
              >
                Add
              </div>
            </div>

            <div id="exp">
              <h1>Experience</h1>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Postition"
                  value={experience.position}
                  onChange={this.handleChange}
                  name="position"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Company"
                  value={experience.company}
                  onChange={this.handleChange}
                  name="company"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="City"
                  value={experience.city}
                  onChange={this.handleChange}
                  name="city"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="From"
                  value={experience.from}
                  onChange={this.handleChange}
                  name="from"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="To"
                  value={experience.to}
                  onChange={this.handleChange}
                  name="to"
                />
              </div>
            </div>
            <div className="container">
              <div
                onClick={this.deleteSectionTwo}
                className="del2 bg-dark text-light text-center p-2 rounded mb-2"
              >
                delete
              </div>
              <div
                id="add2"
                onClick={this.addSection2}
                className="btn form-control bg-dark text-light text-center p-2  rounded  mb-3"
              >
                Add
              </div>
            </div>

            <div className="container ms-0">
              <button
                type="submit"
                className="form-control bg-success text-center p-2  rounded"
              >
                Generate PDF
              </button>
            </div>
            <div
              onClick={this.loadexample}
              className="bg-danger text-center p-2 m-2 rounded"
            >
              Load Example
            </div>
            <div className="bg-info text-center p-2 m-2 rounded">Reset</div>
          </section>
        </form>
        <PersonalInfo
          personal={personal}
          experience={experience}
          education={education}
        />
      </section>
    );
  }
}
export default App;
