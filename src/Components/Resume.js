import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        var educationImage = process.env.PUBLIC_URL + "/images/tech/" + education.image;
        return (
          <div key={education.school}>
            <img className="education-image" alt={education.school} src={educationImage} />
            <div className="education-details">
              <h3>{education.school}</h3>
              <p className="info">{education.location}</p>
              <p className="info">
                {education.degree} <span>&bull;</span>
                <em className="date">{education.graduated}</em>
              </p>
              <p>{education.description}</p>
            </div>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        var workImage = process.env.PUBLIC_URL + "/images/tech/" + work.image;
        return (
          <div key={work.id}>
            <img className="work-image" alt={work.company} src={workImage} />
            <div className="work-details">
              <h3>
                {work.company} <em className="title">- {work.title}</em>
              </h3>
              <p className="info">
                {work.location}
                <span>&bull;</span> <em className="date">{work.years}</em>
              </p>
              <p>{work.description}</p>
            </div>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var projectImage = process.env.PUBLIC_URL + "/images/tech/" + skills.image;
        return (
          <div key={skills.name} className="columns feature-item">
            <img className="skill" alt={skills.name} src={projectImage} />
            <h5>{skills.name}</h5>
            <p>{skills.description}</p>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Favorite Tech</span>
            </h1>
          </div>

          <div>
            <div className="nine columns main-col">
              <p className="lead center">{skillmessage}</p>
              <br/>
            </div>
            <ul className="bgrid-quarters s-bgrid-thirds cf">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
