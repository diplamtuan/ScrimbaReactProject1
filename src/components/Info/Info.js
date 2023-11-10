import React from "react";
import images from "~/assests/images";
function Info() {
  return (
    <div className="info">
      <img className="avatar" src={images.avatar} alt="avatar" />
      <div className="infoWrapper">
        <h1 className="name">Laura Smith</h1>
        <p className="title">Frontend Developer</p>
        <p className="description">laurasmith.website</p>
        <div className="btnWrapper">
          <button className="btn email">
            <img src={images.mailIcon} alt="email" />
            <span className="textBtn">Email</span>
          </button>
          <button className="btn linkedin">
            <img src={images.linkeBtn} alt="linkedin" />
            <span className="textBtn">LinkedIn</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
