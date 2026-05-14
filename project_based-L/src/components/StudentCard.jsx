import React from "react";

const StudentCard = ({ student, deleteStudent }) => {

  return (
    <div className="card">

      <h2>{student.name}</h2>

      <p>
        Course: {student.course}
      </p>

      <p>
        Attendance:
        <span
          className={
            student.attendance === "Present"
              ? "present"
              : "absent"
          }
        >
          {student.attendance}
        </span>
      </p>

      <div className="btnContainer">

        <button>
          View
        </button>

        <button
          className="deleteBtn"
          onClick={() => deleteStudent(student.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
};

export default StudentCard;