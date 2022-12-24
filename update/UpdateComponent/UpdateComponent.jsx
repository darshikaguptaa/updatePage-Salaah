import React from "react";
import photo from "../../assets/team/rohit.png";
import "../UpdateComponent/UpdateComponent.css";

const UpdateComponent = () => {
  return (
    <div className="sect">
      <img className="update-img" src={photo} />
      <div className="info">
        <h2 className="text Ultrabold">
          INTELLIGENT AGENT. HOW PATTIE MAES ALMOST INVENTED SOCIAL MEDIA
        </h2>
        <br />
        <h3 className="Poppins">Company Name</h3>
        <br />
        <hr
          style={{
            color: "white",
            backgroundColor: "white",
            height: 1,
            lineHeight: 0.5,
          }}
        />
        <p className="Poppins"> ✸ Story 1- By Steven Johnson</p>
      </div>
    </div>
  );
};

export default UpdateComponent;
