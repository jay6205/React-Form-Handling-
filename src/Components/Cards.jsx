import React from "react";
import Card from "./Card";
export default function Cards({ users,handleRemove }) {
  return (
    <>
      <div className="w-full max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap">
        {users.map((item, index) => {
          return <Card key={index} id={index} user={item} handleRemove={handleRemove}/>;
        })}
      </div>
    </>
  );
}
