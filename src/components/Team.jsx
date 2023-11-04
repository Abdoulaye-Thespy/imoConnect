import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Notre équipe</h2>
          <p>
          Nous sommes une équipe passionnée et expérimentée, dédiée à vous offrir des services immobiliers de qualité supérieure. 
          Que vous cherchiez à explorer, louer ou aménager une propriété, nous sommes là pour vous accompagner à chaque étape du processus.
          </p>
        </div>
        <div id="row" className="row-row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
