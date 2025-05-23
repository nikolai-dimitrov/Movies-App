import { useEffect, useContext } from "react";
import { useLocation, NavLink } from "react-router";
import { MoviesContext } from "../../contexts/MoviesContext";

import {
    Sidebar, SidebarContent, SidebarGroup, SidebarMenu,
    SidebarHeader, SidebarGroupLabel, SidebarGroupContent, SidebarMenuItem,
    SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton,

} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Home, Search, BookOpenText, Clapperboard, LogIn, LogOut, UserRoundPlus, } from "lucide-react";

const sidebarLinks = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "About Us",
        url: "/about-us",
        icon: BookOpenText,
    },
    {
        title: "My Movies",
        url: "/my-movies",
        icon: Clapperboard,
    },
    {
        title: "Sign In",
        url: "/sign-in",
        icon: LogIn,
    },
    {
        title: "Sign Up",
        url: "/sign-up",
        icon: UserRoundPlus,
    },
    {
        title: "Logout",
        url: "/logout",
        icon: LogOut,
    },
];

const sidebarGenres = ['All', 'Action', 'Thriller', 'Fantasy', 'Sci Fi']

export function SideBar() {
    const { genre, setGenre } = useContext(MoviesContext);
    const location = useLocation();


    useEffect(() => {
        if (["/", "/my-movies"].includes(location.pathname)) {
            setGenre('All')
        }
    }, [location.pathname]);

    const showGenresGroup = location.pathname == "/" || location.pathname == "/my-movies";

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
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem className="relative">
                                <Search className="absolute top-[50%] left-[7px] translate-y-[-50%] text-[#6a6565]" size={20} />
                                <Input placeholder="Search Movies" className="border-hidden pl-8" />
                            </SidebarMenuItem>
                            {sidebarLinks.map((item) => (
                                <SidebarMenuItem key={item.title} className="text-[#6a6565]">
                                    <SidebarMenuButton asChild>
                                        <NavLink to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup className="pl-0">
                    {showGenresGroup &&
                        <SidebarGroupContent>
                            <SidebarMenu className="text-[#6a6565]">
                                <SidebarMenuItem>
                                    <SidebarGroupLabel className="text-white">Genres</SidebarGroupLabel>
                                    <SidebarMenuSub className="border-l-[#201d19]">
                                        {sidebarGenres.map((currentGenre) => (
                                            <SidebarMenuSubItem
                                                className={currentGenre == genre && "active"}
                                                key={currentGenre}
                                                onClick={() => setGenre(currentGenre)}
                                            >
                                                <SidebarMenuSubButton className="cursor-pointer">{currentGenre}</SidebarMenuSubButton >
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    }
                </SidebarGroup>
            </SidebarContent>
        </Sidebar >
    )
}