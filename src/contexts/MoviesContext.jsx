import { useState, useEffect, createContext } from "react";


export const MoviesContext = createContext();

export const MoviesContextProvider = ({ children, genre, searchedMovieTitle }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // TODO: fetch on title or genre change
        // console.log('fetch')

    }, [searchedMovieTitle, genre])

    const contextValues = {
        movies,
    }

    return (
        <MoviesContext.Provider value={contextValues}>
            {children}
        </MoviesContext.Provider>
    )
}