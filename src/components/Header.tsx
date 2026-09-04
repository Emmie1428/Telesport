import { NavLink } from 'react-router-dom'
import logo_tv from '../../public/assets/logo_tv.png'
import logo_sport from '../../public/assets/logo_sport.png'

function Header() {
  return (
    <header className="bg-gray-800 text-gray-300 py-6 px-4 shadow-inner">
      <div className="flex items-center justify-center px-4 py-4 sm:px-6">
        <NavLink
          to="/"
          className="flex items-center gap-3 transition hover:opacity-90"
        >
          <img
            src={logo_tv}
            alt="Logo TéléSport TV"
            className="block h-10 w-10 object-contain sm:h-12 sm:w-12"
          />

          <h1 className="text-2xl font-bold tracking-wide text-blue-400 sm:text-5xl">
            TéléSport
          </h1>

          <img
            src={logo_sport}
            alt="Logo TéléSport Sport"
            className="block h-10 w-10 object-contain sm:h-12 sm:w-12"
          />
        </NavLink>
      </div>
    </header>
  )
}

export default Header
