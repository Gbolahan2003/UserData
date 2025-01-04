import { FC } from 'react'
import  profile from '../assets/images/avatar_17.jpg'
import { User } from '../interface/user.interface'

import { Link } from 'react-router'
import { useAppDispatch } from '../redux/store'
import { setID } from '../redux'



interface CardProps{
    key:string|number,
    user:User
    
}


const Card:FC<CardProps> = ({key, user}) => {
    const dispatch = useAppDispatch()
  return (
    <div 
    key={key} 
    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
    <div className="p-6 flex flex-col gap-4">
        {/* Profile Image */}
        <div className="flex justify-center">
        <img 
            src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${user.username}`} 
            alt={`${user.name}'s profile`} 
            className="rounded-full h-20 w-20 object-cover border-4 border-blue-500" 
            onError={(e:any) => e.target.src = profile} // Fallback to `profile` if the URL fails to load
            />
        </div>
        
        {/* User Info */}
        <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-500 italic">{user.company.catchPhrase}</p>
        </div>

        {/* Contact Info */}
        <div className="text-gray-600 text-sm">
        <p className="flex items-center gap-2">
            <span className="material-icons text-blue-500">email</span>
            {user.email}
        </p>
        <p className="flex items-center gap-2">
            <span className="material-icons text-green-500">phone</span>
            {user.phone}
        </p>
        <p className="flex items-center gap-2">
            <span className="material-icons text-purple-500">public</span>
            <a 
            href={`https://${user.website}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline"
            >
            {user.website}
            </a>
        </p>
        </div>

        {/* Address */}
        <div className="bg-gray-50 p-4 rounded-lg flex justify-between gap-2 pt-auto w-full text-gray-700 text-sm">
            <Link
            onClick={()=>dispatch(setID(user.id))}
                className="px-4 py-2 text-center bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300 ease-in-out w-full"
                to={'/user'}
            >
                View Details
            </Link>
            <button
                className="px-4 py-2 text-center bg-red-500 text-white rounded-lg shadow hover:bg-red-600 active:bg-red-700 transition duration-300 ease-in-out w-full"
            >
                Delete
            </button>
    </div>

    </div>
    </div>

  )
}

export default Card