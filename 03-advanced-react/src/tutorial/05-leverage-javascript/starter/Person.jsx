import React from "react";
import avatar from "../../../assets/default-avatar.svg";

const Person = (person) => {
  return (
    <div
      style={{
        margin: "5px",
        backgroundColor: "teal",
        padding: "5px",
      }}
    >
      {person?.images?.[0]?.small?.url ? (
        <img
          src={person.images[0].small.url}
          alt={person.name}
          height="100px"
          style={{ borderRadius: "50%" }}
        />
      ) : (
        <img
          src={avatar}
          alt="default avatar"
          height="100px"
          style={{ borderRadius: "50%" }}
        />
      )}
      <p>Name : {person?.name}</p>
      {person?.nickName && <p>Nickname : {person.nickName}</p>}
    </div>
  );
};

export default Person;
