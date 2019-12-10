import React from "react";


const AvengersList = props => {
  return (
    <div className="characters-list-wrapper">
      {props.avengers.map(avenger => (
        <div className="character-card" key={avenger.id}>
          <img src={avenger.thumbnail} alt={avenger.name} />
          <h2>
            <div onClick={() => routeToAvenger(props, avenger)}>
              {avenger.name}
            </div>
          </h2>
          <p>({avenger.nickname})</p>
        </div>
      ))}
    </div>
  );
};

const routeToAvenger = (props, avenger) => {
  props.history.push(`/avengers/${avenger.id}`);
};

//you could use this instead of a Link

export default AvengersList;
