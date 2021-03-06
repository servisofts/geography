import { SPageListProps } from 'servisofts-component'
import Services from '../Services';

import InicioPage from "./InicioPage";
import pais from './pais';
const Pages: SPageListProps = {
    "/": InicioPage,
    ...Services.Pages,
    ...pais.Pages,
    "paises": pais

}

export const Reducers = {
    ...Services.Reducers,
    ...pais.Reducers,

}


export default Pages;