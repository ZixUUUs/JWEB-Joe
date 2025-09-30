import { LayoutGrid, Search } from "lucide-react";
import SearchBar from "./components/searchBar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
function Header() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const Data = [
    { id: 1, name: "Politique" },
    { id: 2, name: "Économie" },
    { id: 3, name: "Culture" },
  ];

  return (
    <header>
      <AnimatePresence>
        {isSearchOpen && (
          <SearchBar onClose={() => setSearchOpen(false)} data={Data} />
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
            <LayoutGrid size={26}></LayoutGrid>
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
