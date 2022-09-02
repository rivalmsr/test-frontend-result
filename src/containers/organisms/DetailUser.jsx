import React from 'react';

const DetailUser = ({ picture, name, username, email, phone, website, company, address, setIsDetail }) => {
  const { street, suite, city, zipcode } = address;
  const strAddress = `${street} Street ${suite} ${city} ${zipcode}`;
  const details = { email, phone, website, company: company.name, address: strAddress };
  const handleOnClipBoard = (_text) => {
    navigator.clipboard.writeText(_text);
  };
  return (
    <div className="w-full py-3 px-5 rounded-md shadow">
      <div className="w-full h-auto m-auto text-center">
        <img
          className="w-32 h-32 m-auto rounded-full border group-hover:border-none transition-all"
          src={`https://randomuser.me/api/portraits/${picture}`}
          alt={`Leanne Graham`}
        />
        <h4 className="text-lg text-secondary-main font-semibold tracking-wider mt-2">{name}</h4>
        <p className="text-sm text-secondary-surface tracking-wide">{username}</p>
      </div>
      <ul className="divide-y mt-2">
        {Object.entries(details).map(([key, value]) => (
          <li className="group flex space-x-2 md:space-x-4 pt-3 pb-2" key={key}>
            <p className="w-14 text-secondary-surface">{key}</p>
            <span>:</span>

            <p className="text-secondary-main tracking-wide ml-2">
              {key === 'website' ? (
                <a className="hover:text-primary-main" href="_blank">
                  {value}
                </a>
              ) : (
                value
              )}
            </p>
            {key !== 'website' && (
              <button
                className="invisible text-secondary-surface group-hover:visible focus:text-primary-main"
                onClick={() => handleOnClipBoard(value)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                  />
                </svg>
              </button>
            )}
          </li>
        ))}
      </ul>
      <div className="w-full flex items-center justify-end my-2">
        <button
          className="flex space-x-2 text-secondary-main font-bold py-2 px-4 rounded border hover:text-primary-main hover:border-primary-main focus:outline-none focus:ring focus:ring-primary-surface"
          onClick={() => setIsDetail(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 font-bold">
            <path
              fillRule="evenodd"
              d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DetailUser;
