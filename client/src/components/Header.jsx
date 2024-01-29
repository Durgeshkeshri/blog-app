import { Avatar, Button, Dropdown, Navbar, NavbarCollapse, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';

export default function Header() {
  const design = `text-transparent bg-clip-text bg-gradient-to-r from-[gold] via-[red] to-[maroon] rounded-lg dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[gold] dark:via-[red] dark:to-[maroon]`;
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = () => {
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className='border-b-2 dark:bg-slate-950'>
      <Link
        to='/'
        className='self-center whitespace-nowrap'
      >
        <span className='font-bold text-2xl max-sm:text-base font-serif backdrop:px-2 py-1 text-transparent bg-clip-text bg-gradient-to-r from-[gold] via-[red] to-[maroon] rounded-lg'>
          Nisha Prajapati
        </span>
      </Link>

      <form onSubmit={handleSearch}>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <Button
        className='w-12 h-10 lg:hidden'
        color='gray'
        pill
        onClick={handleSearch}
      >
        <AiOutlineSearch />
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
        
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className={`font-bold text-xl ${path === '/' ? `${design}` : ''}`}>
          <Link onClick={()=>Collapse.Toggle()} to='/' className='hover:text-yellow-300'>Home</Link>
        </Navbar.Link>
        <Navbar.Link className={`font-bold text-xl ${path === '/about' ?  `${design}`: ''}`}>
          <Link onClick={()=>Collapse.Toggle()} to='/about' className='hover:text-yellow-300'>About</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}