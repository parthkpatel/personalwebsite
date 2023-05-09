import React, { Component } from "react";

class Projects extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projectList.map(function (project) {
        var projectImage = process.env.PUBLIC_URL + "/images/projects/" + project.image;
        return (
          <div key={project.title} className="columns project-item">
            <div className="item-wrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.url}
                title={project.title}
              >
                <img alt={project.title} src={projectImage} />
                <div className="overlay">
                  <div className="project-item-meta">
                    <h5>{project.title}</h5>
                    <p>{project.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="project">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check out some of my personal projects!</h1>

            <div
              id="project-wrapper"
              className="bgrid-thirds s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
