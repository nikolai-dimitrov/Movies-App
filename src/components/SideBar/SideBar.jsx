import { useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { MoviesContext } from "../../contexts/MoviesContext";
import { SideBarPagesGroup } from "./SideBarPagesGroup";
import { SideBarGenresGroup } from "./SideBarGenresGroup";

import {
    Sidebar, SidebarContent, SidebarHeader, SidebarGroupLabel, SidebarMenuButton,
} from "@/components/ui/sidebar";

export function SideBar() {
    const { genre, setGenre } = useContext(MoviesContext);
    const location = useLocation();

    useEffect(() => {
        if (["/", "/my-movies"].includes(location.pathname)) {
            setGenre('All');
        }

    }, [location.pathname]);

    const isPageContainMovies = location.pathname == "/" || location.pathname == "/my-movies";

    return (
        <Sidebar className="border-r-[#201d19] sm:border-r-[#201d19]">
            <SidebarHeader className="bg-(--primary-bg-color)">
                <SidebarMenuButton asChild>
                    <>
                        <a href="/" className="leading-none">
                            <span className="text-[#ff0000] text-[40px] pl-2">M</span>
                            <span className="text-[#fff] text-2xl">ovies</span>
                        </a>
                    </>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent className="bg-neutral-950 text-white">
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SideBarPagesGroup isPageContainMovies={isPageContainMovies} pathname={location.pathname} />
                <SideBarGenresGroup isPageContainMovies={isPageContainMovies} genre={genre} setGenre={setGenre} />
            </SidebarContent>
        </Sidebar >
    )
}