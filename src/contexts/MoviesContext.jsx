import { useState, createContext } from "react";

export const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
    const [genre, setGenre] = useState('All');

    const contextValues = {
        genre,
        setGenre,
    }

    return (
        <MoviesContext.Provider value={contextValues}>
            {children}
        </MoviesContext.Provider>
    )
}