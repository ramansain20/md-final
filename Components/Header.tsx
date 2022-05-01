// import Link from 'next/link'

// function Header() {
//   return (
//     <header className="fixed z-50 flex justify-between w-full p-5 mx-auto max-w-10xl bg-slate-100">
//       <div className="flex items-center space-x-5">
//         <Link href="/">
//           <div className='flex flex-row content-center justify-center text-center'> <img 
//             className="object-contain w-auto cursor-pointer h-14"
//             src="https://yt3.ggpht.com/ytc/AKedOLRjIye2rGzS3xHNLXgPw-4DjDverzaH5-0jScn6NA=s900-c-k-c0x00ffffff-no-rj"
//             alt=""
//           ></img>
//           <h1 className="font-sans-serif text-0.5xl md:text-2xl px-2 cursor-pointer place-self-center">Mailer Daemon</h1>
//           </div> 
//         </Link>
//         {/* <p></p>   */}
//         {/* <div className="items-center hidden space-x-5 md:inline-flex">
//           <h3>About</h3>
//           <h3>Contact</h3>
//           <h3 className="px-4 py-1 text-white bg-green-600 rounded-full">
//             Follow
//           </h3>
//         </div> */}
//       </div>
//       <div className="flex flex-row ">
//         <a href='https://placementor-2021.herokuapp.com/' target={'_blank'}>
//         <button type="button" className="text-gray-900 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Placementor</button>
//       </a>
//       {/* </Link> */}
//       <a href='https://www.iitism.ac.in/iitismnew/' target='_blank'>
//       <button type="button" className="text-gray-900 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">IIT-ISM</button>
//       </a>
//       </div>
//     </header>
//   )
// }

// export default Header;


import React from "react";
import {BsList } from "react-icons/bs";
 function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-5 text-black">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="inline-block py-2 mr-4 font-serif text-2xl font-bold leading-relaxed uppercase whitespace-nowrap"
              href="/"
            >
              Mailer Daemon
            </a>
            <button
              className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <BsList />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              <li className="nav-item">
                <a
                  className="flex items-center px-3 py-2 text-sm font-bold leading-snug uppercase hover:opacity-75"
                  href="https://placementor-2021.herokuapp.com/"
                >
                  <i className="text-lg opacity-75 fab fa-facebook-square leading-lg"></i><span className="ml-2">Placementor</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center px-3 py-2 text-sm font-bold leading-snug uppercase hover:opacity-75"
                  href="https://www.iitism.ac.in/iitismnew/"
                >
                  <i className="text-lg opacity-75 fab fa-twitter leading-lg"></i><span className="ml-2">IIT ISM </span>
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="flex items-center px-3 py-2 font-bold leading-snug uppercase text-smrdeszdsz hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg opacity-75 fab fa-pinterest leading-lg"></i><span className="ml-2">Signing Off</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
  

    export default Header;