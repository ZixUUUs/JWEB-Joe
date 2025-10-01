import { X } from "lucide-react";
import { motion } from "framer-motion";

function NavCategories({ data, navClose }) {
  return (
    <motion.div
      className="overlay Naverlay"
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="nav-container">
        <h2>Categories</h2>
        <nav>
          {data.length > 0 ? (
            <ul>
              {data.map((item, index) => (
                <li key={item.id || index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No cat</p>
          )}
        </nav>
      </div>
      <button onClick={navClose}>
        <X size={26} color="#FFFFFF"></X>
      </button>
    </motion.div>
  );
}
export default NavCategories;
