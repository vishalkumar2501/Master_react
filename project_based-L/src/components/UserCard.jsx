import React from "react";

const UserCard = ({ user }) => {

  return (
    <div className="card">

      <img
        src={`https://i.pravatar.cc/150?img=${user.id}`}
        alt=""
      />

      <h2>{user.name}</h2>

      <p>
        Email:
        {user.email}
      </p>

      <p>
        Company:
        {user.company.name}
      </p>

      <p>
        City:
        {user.address.city}
      </p>

    </div>
  );
};

export default UserCard;