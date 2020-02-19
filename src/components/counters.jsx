import React from "react";
import Counter from "./counter";

const Counters = ({ counters, increment, onDelete, onDecrement }) => {
  return (
    <React.Fragment>
      {counters.map(c => (
        <Counter
          key={c.id}
          item={c}
          increment={increment}
          onDelete={onDelete}
          onDecrement={onDecrement}
        />
      ))}
    </React.Fragment>
  );
};

export default Counters;
