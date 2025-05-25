import { NavLink } from "react-router";

import { SideBarSearchField } from "./SideBarSearchField";

import {
    SidebarGroup, SidebarMenu, SidebarGroupContent, SidebarMenuItem, SidebarMenuButton,
} from "@/components/ui/sidebar";

import { Home, BookOpenText, Clapperboard, LogIn, LogOut, UserRoundPlus, } from "lucide-react";

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
export const SideBarPagesGroup = ({ isPageContainMovies, pathname }) => {
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SideBarSearchField isPageContainMovies={isPageContainMovies} pathname={pathname} />
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
    )
}