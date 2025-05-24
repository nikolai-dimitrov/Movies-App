import { memo } from "react";
import { NavLink } from "react-router";

import {
    SidebarGroup, SidebarMenu, SidebarGroupContent, SidebarMenuItem, SidebarMenuButton,
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
// Using memo to prevent unnecessary re-render when genre changes. Without memo when genre is changed movie context will force side bar re-render, and side bar will re-render its children,
export const SideBarPagesGroup = memo(({ inputRef, isPageContainMovies }) => {
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem className="mb-2 relative">
                        <Search className="absolute top-[50%] left-[7px] translate-y-[-50%] text-[#6a6565]" size={20} />
                        <Input ref={inputRef} placeholder="Search Movies" className="border-hidden pl-8" disabled={!isPageContainMovies} />
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
    )
})