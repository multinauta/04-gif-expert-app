import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
import 'whatwg-fetch';

describe('Pruebas <GifExpertApp/>', () => { 

   test('should first', () => { 
       render( <GifExpertApp /> );
       screen.debug();
    })

 })