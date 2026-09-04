import { NavLink } from 'react-router-dom'
import erreur from '../../public/assets/erreur.png'

function Error() {
  return (
    <div className="flex min-h-115 flex-col items-center justify-center bg-gray-900 px-6 text-white">
      <img
        src={erreur}
        alt="Illustration d’erreur"
        className="mb-6 h-24 w-24 object-contain sm:h-32 sm:w-32"
      />

      <div className="w-full max-w-xl rounded-lg bg-gray-800 p-8 text-center shadow-xl">
        <h1 className="mb-4 text-5xl font-extrabold text-blue-400">
          Erreur 404
        </h1>
        <p className="mb-6 text-lg text-gray-300">
          Oups ! Cette page ne semble pas exister.
        </p>

        <NavLink
          to="/"
          className="inline-block rounded-md bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
        >
          Retour à l’accueil
        </NavLink>
      </div>
    </div>
  )
}

export default Error