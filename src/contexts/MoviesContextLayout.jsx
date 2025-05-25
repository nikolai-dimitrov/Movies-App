import { useContext } from "react";
import { Outlet } from "react-router";

import { MoviesContextProvider } from "./MoviesContext";
import { MoviesQueryContext } from "./MoviesQueryContext";

export const MoviesContextLayout = () => {
    const moviesQueryContextValues = useContext(MoviesQueryContext);

    return (
        <MoviesContextProvider {...moviesQueryContextValues}>
            <Outlet />
        </MoviesContextProvider>
    )
};