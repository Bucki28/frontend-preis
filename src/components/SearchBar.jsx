import { motion } from "framer-motion";
import "../styles/searchBar.css";

export const SearchBar = () => {
    return (
        <>
            <motion.div className="input-group search">
                <input type="text" className="form-control barra" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </motion.div>
        </>
    )
}

