import { useState, createContext } from "react";

export const MoviesQueryContext = createContext();

export const MoviesQueryContextProvider = ({ children }) => {
    const [genre, setGenre] = useState('All');
    const [searchedMovieTitle, setSearchedMovieTitle] = useState('');


    const contextValues = {
        genre,
        searchedMovieTitle,
        setGenre,
        setSearchedMovieTitle,
    }

    return (
        <MoviesQueryContext.Provider value={contextValues}>
            {children}
        </MoviesQueryContext.Provider>
    )
}
