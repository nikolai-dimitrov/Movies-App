import { useState, useEffect, createContext } from "react";


export const MoviesContext = createContext();

export const MoviesContextProvider = ({ children, genre }) => {
    // const {} = useContext
    const [movies, setMovies] = useState([]);

    console.log(genre)
    useEffect(() => {
        // TODO: fetch on title or genre change

    }, [])  // searchedMovieTitle, genre

    const contextValues = {
        movies,
    }

    return (
        <MoviesContext.Provider value={contextValues}>
            {children}
        </MoviesContext.Provider>
    )
}