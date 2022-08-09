import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import 'whatwg-fetch';

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch';
    test('debe de mostrar el lading inicialmente', () => { 

        render( <GifGrid category={category} /> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ));
     })

     test('debe mostrar items cuando se cargan las imágenes iseGetchGifs ', () => { 

      })

 })