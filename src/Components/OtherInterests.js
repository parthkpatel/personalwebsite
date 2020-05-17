import React, { Component } from "react";

class OtherInterests extends Component {
  render() {
    if (this.props.data) {
      var cameraImage = "images/" + this.props.data.cameraImage;
      var dancingImage = "images/" + this.props.data.dancingImage;
      var bio = this.props.data.bio;
      var generalInterests = this.props.data.generalInterests;
      var danceInformation = this.props.data.danceInformation;
      var danceVideoLink = this.props.data.danceVideoLink;
    }

    return (
      <section id="other-interests">
        <div className="row">
          <div className="three columns column-right first-image">
            <img src={cameraImage} alt="Parth Patel Camera Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>Other Interests</h2>
            <p>{bio}</p>
            <p>{generalInterests}</p>
            <p>
              {danceInformation}{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={danceVideoLink}
              >
                Here
              </a>{" "}
              is a link to our championship performance!
            </p>
          </div>
          <div className="three columns column-right">
            <img src={dancingImage} alt="Parth Patel Dancing Pic" />
          </div>
        </div>
      </section>
    );
  }
}

export default OtherInterests;
