import React from "react";
import ItemList from "./ItemList";

function Content({ items, handleCheck, handleDelete }) {
  // const [name, setName] = useState("Misael")
  // const [count, setCount] = useState(0)

  // const handleClick = () => {
  //     console.log(count)
  // }

  // const handleClick2 = (name) => {
  //     console.log(`${name} clicou`)
  // }
  // return (
  //     <main>
  //         <p>Hello, {name}</p>
  //         <button onClick={handleClick}>Clicar</button>
  //         <button onClick={() => {handleClick2('Misael')}}>Clicar 2</button>
  //     </main>
  // )

  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}> Sua lista está vazia</p>
      )}
    </>
  );
}

export default Content;
