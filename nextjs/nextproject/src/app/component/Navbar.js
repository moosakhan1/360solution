"use client";

export default function Navbar({ setSearchQuery }) {
  return (
    <nav className="bg-zinc-50 dark:bg-neutral-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-xl text-black dark:text-white font-bold">
            Navbar
          </div>

          {/* Toggle Button (Mobile) */}
          {/* <div className="lg:hidden">
            <button
              // onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-black dark:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div> */}

          {/* Navbar links (desktop) */}
          <div className="hidden lg:flex space-x-6 items-center">
            <a href="#" className="text-black dark:text-white hover:underline">
              Home
            </a>
            <a
              href="#"
              className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
            >
              Link
            </a>
            {/* Search input */}
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1 border rounded-md text-black dark:text-white dark:bg-neutral-800"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu (toggle) */}
      <div className="lg:hidden px-4 pb-4 space-y-3">
        <a href="#" className="block text-black dark:text-white">
          Home
        </a>
        <a
          href="#"
          className="block text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
        >
          Link
        </a>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-1 border rounded-md text-black dark:text-white dark:bg-neutral-800"
        />
      </div>
    </nav>
  );
}
