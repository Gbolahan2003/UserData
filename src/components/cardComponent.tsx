import { FC, useEffect, useState } from 'react';
import Card from './card';
import { User } from '../interface/user.interface';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { fetchUsers } from '../redux/featrure';
import { motion } from 'framer-motion';

const CardComponent: FC = () => {
  const { Users } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchUsers).then(() => setIsLoading(false));
  }, [dispatch]);

  const userData = Users || []
  useEffect(() => {
    setFilteredUsers(
    userData.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [Users, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4">
      <motion.div
        className="mb-6 w-full max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          placeholder="Search users..."
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </motion.div>
      
      {isLoading ? (
        <motion.div
          className="flex items-center justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader"></div>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredUsers.map((user: User) => (
            <motion.div
              key={user.id}
              className="card-container"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: user.id * 0.1 }}
            >
              <Card key={user.id} user={user} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default CardComponent;
