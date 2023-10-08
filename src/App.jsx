import { useState } from "react";
import { UserInfo, Container, AddItem } from "./component";
const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "mahmoud",
      age: 22,
      type: "male",
      location: "cairo",
    },
    {
      id: 2,
      name: "sara",
      age: 32,
      type: "female",
      location: "alex",
    },
  ]);
  const addItem = (info) => {
    setData((prev) => [...prev, { ...info, id: data.length + 1 }]);
  };
  return (
    <div>
      <Container>
        <AddItem addItem={addItem} />
      </Container>
      <Container>
        {data.map((item) => {
          return (
            <UserInfo
              key={item.id}
              name={item.name}
              age={item.age}
              type={item.type}
              location={item.location}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default App;
