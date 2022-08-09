import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import 'whatwg-fetch';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch';
    test('debe de mostrar el lading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={category} /> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ));
     })

     test('debe mostrar items cuando se cargan las imágenes useFetchGifs ', () => { 
        
        

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://one-punch.com/saitama.jpg'
            },
            {
                id: 'DEF',
                title: 'Goku',
                url: 'https://one-punch.com/one-punch.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render( <GifGrid category={category} /> );

        expect( screen.getAllByRole('img').length).toBe(2);

      })

 })