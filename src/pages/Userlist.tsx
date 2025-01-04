import  { FC } from 'react'
import  profile from '../assets/images/avatar_17.jpg'
import { User } from '../interface/user.interface'
import { Button } from '../components/button'




interface CardProps{
    key:string|number,
    user:User
    
}


const Card:FC<CardProps> = ({key, user}) => {
  return (
<div 
  key={key} 
  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
>
  <div className="p-6 flex flex-col gap-4">
    {/* Profile Image */}
    <div className="flex justify-center">
      <img 
        src={profile} 
        alt={`${user.name}'s profile`} 
        className="rounded-full h-20 w-20 object-cover border-4 border-blue-500" 
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
    <div className="bg-gray-50 p-4 rounded-lg flex justify-between gap-2 pt-auto  w-full text-gray-700 text-sm">
        <Button  size='full'>View Details</Button>
        <Button size='full' variant='danger'>Delete</Button>
    </div>
  </div>
</div>

  )
}

export default Card