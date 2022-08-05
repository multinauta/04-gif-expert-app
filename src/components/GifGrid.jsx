import { getGifs } from '../helpers/getGifs';
import { useEffect, useState } from 'react';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImagenes = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect(() => {
    getImagenes();
  }, []);


  return (
    <>
      <h3>{category}</h3>

      <ol>
        {
          images.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))
        }
      </ol>

    </>
  )
}
