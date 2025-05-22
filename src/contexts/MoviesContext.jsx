import { createContext } from "react";

export const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
    const contextValues = {
        testValue: 7,
    }

    return (
        <MoviesContext.Provider value={contextValues}>
            {children}
        </MoviesContext.Provider>
    )
}