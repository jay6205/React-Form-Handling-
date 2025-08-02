import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {
  const [users, setUsers] = useState([]);
  const handleFormSubmit = (data) => {
    setUsers([...users, data]);
  };
  const handleRemove=(idx)=>{
    setUsers(()=>users.filter((item,index)=>index!==idx))
  }
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
        <div className="container mx-auto">
          <Cards handleRemove={handleRemove} users={users} />
          <Form handleFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </>
  );
}

export default App;
