import { useEffect, useState } from 'react';
import { GifItem } from './Gifitem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  console.log(category)
  const { images, isLoading} = useFetchGifs({category});

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }

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
