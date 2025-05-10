/*import ListGroup from "./components/ListGroup";*/
import { useState } from "react";
import Alert from "./components/Alert";
//import Button from "./components/Button";
/*
function App() {
 
  let items = ["New York", "San Francisco", "Tokyo", "London", "Los Angeles"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <button></button>
    </div>
  );
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>my alert!</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        click
      </Button>
    </div>
  );
}

export default App;
*/

interface props {
  children: string;
  color: string;
  onClick: () => void;
}
const MyButton = function ({ children, color, onClick }: props) {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children.replace(children[0], children[0].toUpperCase())}
    </button>
  );
};

export default function MyApp() {
  return (
    <>
      <h1>Welcome to my app button component</h1>
      <MyButton
        onClick={() => console.log("You clicked my button")}
        color="tertiary"
      >
        click
      </MyButton>
    </>
  );
}
/*
interface props {
  items: string[];
  heading: string;
}
const FriendList = function ({ items, heading }: props) {
  return (
    <div>
      <h1>{heading}</h1>
      <ul>
        {items.map((item) => (
          <li className="list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default function MyFriends() {
  const friendsArray = [
    "Elizabeth",
    "Amarachi",
    "Michelle",
    "Micayla",
    "Ebuka",
  ];
  const heading = "list of friends";
  return (
    <>
      <FriendList heading={heading} items={friendsArray} />
    </>
  );
}
*/
