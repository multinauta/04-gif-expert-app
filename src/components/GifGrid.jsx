import { useEffect, useState } from 'react';
import { GifItem } from './Gifitem';
import { getGifs } from '../helpers/getGifs';

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

      <div className="card-grid">
        {
          images.map(( image ) => (
            <GifItem 
              key={image.id}
              {...image}
            />
          ))
        }
      </div>

    </>
  )
}
