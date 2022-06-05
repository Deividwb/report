import React from "react";

const LookWeb = ({ poema }) => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  return (
    <div>
      <h1>{poema ? poema.title : "..."}</h1>
      <p>Por {poema ? poema.poet.name : "..."}</p>
      <img src="https://picsum.photos/600/400"></img>
      <p>{lorem}</p>
      <p>{poema ? poema.content : "..."}</p>
    </div>
  );
};

export default LookWeb;
