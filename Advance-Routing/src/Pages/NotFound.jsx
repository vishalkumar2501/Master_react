import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div id="oopss">
      <div id="error-text">
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
        />
        <span>404 PAGE</span>
        <p className="p-a">
          The page you were looking for could not be found
        </p>
        <p className="p-b">Go back to previous page</p>

        <button className="back" onClick={() => window.history.back()}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;