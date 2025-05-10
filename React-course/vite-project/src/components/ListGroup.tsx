import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
  items: string[];
  heading: string;

  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // HOOK
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //items = [];
  const GetMessage = function () {
    return items.length === 0 && <p>No list item found</p>;
  };
  return (
    <Fragment>
      <h1>{heading}</h1>
      {GetMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              `${index}: ${onSelectItem(item)}`;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
