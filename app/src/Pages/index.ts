import { SPageListProps } from 'servisofts-component'

import InicioPage from "./InicioPage";
import pais from './pais';

const Pages: SPageListProps = {
    "inicio": InicioPage,
    ...pais.Pages,

}


export const Reducers = {
    ...pais.Reducers,
}
export default Pages;