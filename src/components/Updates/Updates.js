import React from "react";
import Notification from "./Notification";
import "./Updates.css";

function Updates() {
  return (
    <section className="updates">
      <div className="updatesHeading">
        <i className="fa-sharp fa-solid fa-bell" />
        <div>
          <h3>Updates</h3>
          <button>View All</button>
        </div>
      </div>
      <div className="updatesContent">
        <ul>
          <Notification />
          <Notification />
        </ul>
      </div>
    </section>
  );
}

export default Updates;
