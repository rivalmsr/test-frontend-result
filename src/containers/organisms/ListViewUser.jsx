import React from 'react';

const ListViewUser = ({ search, users, pictures, handleOnDetail }) => {
  return (
    <ul>
      {search(users).map((user, index) => (
        <li
          key={user.id}
          className="group md:flex md:space-x-6 text-secondary-surface py-3 px-5 mb-1 rounded shadow hover:bg-gray-50 hover:cursor-pointer transition ease-in-out hover:-translate-y-0.5 hover:shadow-primary-main"
          onClick={() => handleOnDetail(pictures[index], user)}
        >
          <div className="hidden sm:hidden md:inline-flex">
            <img
              className="w-12 h-12 rounded-full border group-hover:border-none transition-all"
              src={`https://randomuser.me/api/portraits/${pictures[index]}`}
              alt={user.name}
            />
          </div>
          <div>
            <h4 className="group-hover:text-secondary-main text-lg font-semibold tracking-wider">{user.name}</h4>
            <div className="mt-1 flex items-center space-x-4">
              <p className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm tracking-wide">{user.username}</span>
              </p>
              <p className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm tracking-wide">{user.email}</span>
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListViewUser;
