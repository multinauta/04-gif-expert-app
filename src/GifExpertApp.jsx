import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCategory = () => {
      setCategories(['Attack on Titan', ...categories]);
    }

    return (
        <>
          <h1>GifExpertApp</h1>
          <AddCategory/>
          <button onClick={onAddCategory}  >Agregar</button>
          <ol>
            { categories.map( category => {
              return <li key={ category }>{ category }</li>
            })}
          </ol>
        </>
    )
}