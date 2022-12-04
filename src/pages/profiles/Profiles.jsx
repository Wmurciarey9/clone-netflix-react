import React from "react";
import { LinkToPages } from "../../components/linkToPages/LinkToPages";
import "./profiles.scss";

export const Profiles = () => {
  return (
    <div className="profile-section">
      <LinkToPages />
      <h1>Who's watching?</h1>
      <div className="profile-box">
        <div className="user">
          <img
            src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
            alt=""
          />
          <span>User 1</span>
        </div>
        <div className="user">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
            alt=""
          />
          <span>User 2</span>
        </div>
        <div className="user">
          <img
            src="https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg"
            alt=""
          />
          <span>User 3</span>
        </div>
        <div className="user">
          <img
            src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/50e8272e1fac95db8aa33e34_rw_600.png?h=5c620938ca992743e815e0c3629f52d9"
            alt=""
          />
          <span>User 4</span>
        </div>
        <div className="user">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
            alt=""
          />
          <span>User 5</span>
        </div>
      </div>
      <div className="button">
        <button className="profile-button">Manage Profiles</button>
      </div>
    </div>
  );
};
