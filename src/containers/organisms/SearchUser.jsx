import React from 'react';

const SearchUser = ({ setQuery }) => {
  return (
    <div className="w-full sm:w-4/5 lg:w-[48rem] relative">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-secondary-surface"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <input
        className="w-full text-base text-secondary-main tracking-wide py-1 px-12 bg-gray-200 rounded-full focus:outline-none focus:ring focus:ring-primary-surface"
        type="text"
        placeholder="Search Name, Username or Email ..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchUser;
