import React from "react";
import "./offers.css";
const Offers = () => {
  return (
    <div className="offerContainer">
      <h1>
        what we <span className="grey">offer</span>
        <span className="orange">/</span>
      </h1>
      <div className="offerCategory">
        <div className="left">
          <div className="categoryContainer">
            <h3>Enterprise Software Development</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate at minima explicabo aliquid esse, placeat, ab eum
              dolorem porro modi praesentium. Praesentium error laborum deserunt
              distinctio, vero sint necessitatibus eius!
            </p>
          </div>
          <div className="categoryContainer">
            <h3>Support Anytime & Anywhere</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              illo eius culpa! Accusamus dicta repellat officiis deleniti beatae
              reiciendis ipsam, in ea, tenetur quos id?
            </p>
          </div>
        </div>
        <div className="right">
          <div className="categoryContainer">
            <h3>Development & Analytics</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              quis consequuntur, odit quae quod repellendus facere ab id
              reprehenderit quo!
            </p>
          </div>
          <div className="categoryContainer">
            <h3>Promotion & Partnerships</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              aperiam sit culpa eligendi natus ipsa fugit consequatur ut. Sequi
              delectus iure repudiandae perferendis tempora? Debitis ab,
              inventore in minus sapiente, incidunt nihil eum officia soluta
              cum, ipsa dolores provident beatae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
