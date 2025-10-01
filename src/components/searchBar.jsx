import { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

function SearchBar({ data, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      className="overlay"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onClose}>
          <X size={26}></X>
        </button>
      </div>
      {searchTerm && (
        <div className="search-list">
          {filteredData.length > 0 ? (
            <ul>
              {filteredData.map((item, index) => (
                <li key={item.id || index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun résultat trouvé</p>
          )}
        </div>
      )}
    </motion.div>
  );
}
export default SearchBar;
