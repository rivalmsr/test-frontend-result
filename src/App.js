import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getUsers, userSelectors } from './slices/userSlice';
import DetailUser from './containers/organisms/DetailUser';
import ListViewUser from './containers/organisms/ListViewUser';
import SearchUser from './containers/organisms/SearchUser';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(userSelectors.selectAll);
  const [query, setQuery] = useState('');
  const [searchParam] = useState(['name', 'username', 'email']);
  const [detailUser, setDetailUser] = useState({});
  const [isDetail, setIsDetail] = useState(false);
  const pictures = [
    'men/18.jpg',
    'men/46.jpg',
    'men/51.jpg',
    'men/40.jpg',
    'men/85.jpg',
    'women/8.jpg',
    'men/71.jpg',
    'men/15.jpg',
    'men/11.jpg',
    'men/28.jpg',
    'men/18.jpg',
  ];

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const search = (_users) => {
    return _users.filter((_user) =>
      searchParam.some((_newUser) => _user[_newUser].toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
    );
  };

  const handleOnDetail = (_picture, _user) => {
    setDetailUser({ ..._user, picture: _picture });
    setIsDetail(true);
  };

  const listViewUserProps = {
    search,
    users,
    pictures,
    handleOnDetail,
  };

  return (
    <>
      <header className="fixed top-0 w-full h-12 px-4 bg-white flex items-center justify-center shadow">
        <SearchUser setQuery={setQuery} />
      </header>

      <main className="w-full h-auto mt-16 flex justify-center">
        <div className="w-auto md:w-[31.25rem] xl:w-[37.5rem] px-2">
          <h2 className="text-lg text-secondary-main text-right font-semibold tracking-wide">
            {isDetail ? 'Detail' : 'List View'} User
          </h2>
          <div className="w-full mt-2">
            {isDetail ? (
              <DetailUser {...detailUser} setIsDetail={setIsDetail} />
            ) : (
              <ListViewUser {...listViewUserProps} />
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
