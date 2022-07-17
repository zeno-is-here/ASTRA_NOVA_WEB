import React from 'react';
import logo from '../assets/logo.png';

const Header = ({ navbarOpen, setNavbarOpen }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const navigation = [
    { name: 'Astra Nova', href: '#', current: true },
    { name: 'Nft Collections', href: '#' },
    { name: 'Deviants', href: '#' },
    { name: 'Meta RPG', href: '#' },
    { name: 'Social', href: '#' },
    { name: 'Wallpaper', href: '#' },
  ];

  return (
    <header className="w-full h-[10%] top-0 left-0 p-10 flex z-20">
      {/* Logo */}
      <>
        <div className="hidden bg-transparent md:ml-[10%] md:flex md:items-center md:space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:ease-in-out duration-500',
                'px-3 py-2 rounded-md text-base font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <span
            className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
              navbarOpen ? 'rotate-45 delay-200' : '-translate-y-1.5'
            }`}
          ></span>
          <span
            className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
              navbarOpen ? 'w-0 opacity-50' : 'w-5 delay-200 opacity-100'
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
              navbarOpen ? '-rotate-45 delay-200' : 'translate-y-1.5'
            }`}
          ></span>
        </div>
      </button>
    </header>
  );
};
export default Header;
