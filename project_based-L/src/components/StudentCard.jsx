import React from "react";

const StudentCard = ({ name, course, attendance }) => {

  return (
    <div className="card">

      <h2>{name}</h2>

      <p>Course: {course}</p>

      <p>
        Attendance:
        <span
          className={
            attendance === "Present"
              ? "present"
              : "absent"
          }
        >
          {attendance}
        </span>
      </p>

      <button>View Details</button>

    </div>
  );
};

export default StudentCard;