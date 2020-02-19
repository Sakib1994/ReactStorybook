import React from "react";

const Counter = ({ item, increment, onDelete, onDecrement }) => {
  let classes = "m-2 badge badge-";
  const formatNumber = () => {
    return item.value === 0 ? "Zero" : item.value;
  };

  return (
    <div className="row">
      <div className="col-1">
        <span
          className={
            item.value === 0 ? classes + "warning" : classes + "primary"
          }
        >
          {formatNumber()}
        </span>
      </div>
      <div className="col">
        <button
          disabled={item.value === 0 ? true : false}
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDecrement(item)}
        >
          -
        </button>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={() => increment(item)}
        >
          +
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(item.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Counter;
