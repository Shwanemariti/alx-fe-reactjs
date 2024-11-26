import React from "react";
const UserProfile = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-lg shadow-md">
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/150"
        alt="User Profile"
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover"
      />
      {/* User Info */}
      <h1 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
        John Doe
      </h1>
      <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600 text-center">
        Frontend Developer passionate about crafting intuitive user experiences and accessible designs.
      </p>
    </div>
  );
};

export default UserProfile;
