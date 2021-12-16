import { SPageListProps } from 'servisofts-component'
import Services from '../Services';

import InicioPage from "./InicioPage";
import Pais from './pais';
const Pages: SPageListProps = {
    "/": InicioPage,
    ...Services.Pages,
    "pais": Pais

}


export default Pages;