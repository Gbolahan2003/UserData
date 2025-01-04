
import { useAppDispatch, useAppSelector } from "../redux/store";
import { setID } from "../redux";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";

const UserProfile = () => {
  const { Users, id } = useAppSelector((state) => state.user);
  const user = Users && Users.find((user) => user.id === id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (!user || !id) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <h1 className="text-4xl font-extrabold text-white">User Not Found</h1>
      </div>
    );
  }

  const handlePrevUser = () => {
    if (id > 1) dispatch(setID(Number(id) - 1));
  };

  const handleNextUser = () => {
    if (id < Users.length) dispatch(setID(Number(id) + 1));
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center">
      <motion.div
        className="bg-white shadow-2xl rounded-lg max-w-4xl w-full p-8 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-4 left-4">
          <button
            onClick={handlePrevUser}
            className="text-blue-500 hover:underline flex items-center"
            disabled={id === 1}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Prev
          </button>
        </div>
        <div className="absolute top-4 right-4">
          <button
            onClick={handleNextUser}
            className="text-blue-500 hover:underline flex items-center"
            disabled={id === Users.length}
          >
            Next
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <Button
            onClick={handleBackToHome}
            className=" flex items-center"
          >
            Back to Home
          </Button>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          {/* Profile Picture */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-full p-1 w-32 h-32">
              <img
                src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${user.username}`}
                alt={user.name}
                className="rounded-full w-full h-full"
              />
            </div>
          </motion.div>

          {/* User Details */}
          <motion.div
            className="flex-grow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h1 className="text-3xl font-extrabold text-gray-900">{user.name}</h1>
            <p className="text-xl text-gray-600">@{user.username}</p>

            <div className="mt-6 space-y-4">
              <div>
                <h2 className="text-lg font-bold text-gray-700">Contact Info</h2>
                <p>
                  <span className="font-semibold">Email:</span> {user.email}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> {user.phone}
                </p>
                <p>
                  <span className="font-semibold">Website:</span>{" "}
                  <a
                    href={`http://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {user.website}
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-700">Address</h2>
                <p>
                  {user.address.suite}, {user.address.street}, {user.address.city}
                </p>
                <p>
                  <span className="font-semibold">Zipcode:</span> {user.address.zipcode}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-700">Company</h2>
                <p>
                  <span className="font-semibold">Name:</span> {user.company.name}
                </p>
                <p>
                  <span className="font-semibold">Catchphrase:</span> {user.company.catchPhrase}
                </p>
                <p>
                  <span className="font-semibold">Business:</span> {user.company.bs}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile;
