import { LayoutGrid, Search } from "lucide-react";
import SearchBar from "./components/searchBar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import NavCategories from "./components/navCategories";

function Header() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [navOpen, setNav] = useState(false);
  const Data = [
    { id: 1, name: "Politique", link: "www.youtube.com" },
    { id: 2, name: "Économie", link: "www.youtube.com" },
    { id: 3, name: "Culture", link: "www.youtube.com" },
  ];

  return (
    <header>
      <AnimatePresence>
        {isSearchOpen && (
          <SearchBar onClose={() => setSearchOpen(false)} data={Data} />
        )}

        {navOpen && (
          <NavCategories navClose={() => setNav(false)} data={Data} />
        )}
      </AnimatePresence>
      <div className="logo-container contain">
        <h1>JWEB</h1>
      </div>
      <div className="btn-container">
        <div className="search-btn">
          <button
            onClick={() => {
              setSearchOpen(true);
            }}
          >
            <Search size={26}></Search>
          </button>
        </div>
        <div className="categories-btn">
          <button>
            <LayoutGrid
              size={26}
              onClick={() => {
                setNav(true);
              }}
            ></LayoutGrid>
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
