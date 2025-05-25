import { useState, useEffect, createContext } from "react";

export const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState('All');
    const [searchedMovieTitle, setSearchedMovieTitle] = useState('');

    useEffect(() => {
        // TODO: fetch on title or genre change

    }, [searchedMovieTitle, genre])

    const contextValues = {
        movies,
        genre,
        setGenre,
        setSearchedMovieTitle,
    }

    return (
        <MoviesContext.Provider value={contextValues}>
            {children}
        </MoviesContext.Provider>
    )
}