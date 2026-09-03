import {NavLink} from "react-router-dom"
import type { HeaderProps } from '../models/types'

function Header({ id }: HeaderProps) {
    return (
        <div className=" bg-gray-900 text-white p-2 text-4xl font-bold text-blue-400">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to={`/country/${id}`}>Pays</NavLink>          
        </div>
    )
}

export default Header