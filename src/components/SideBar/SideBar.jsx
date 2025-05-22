import { useLocation } from "react-router";
import {
    Sidebar, SidebarContent, SidebarGroup, SidebarMenu,
    SidebarHeader, SidebarGroupLabel, SidebarGroupContent, SidebarMenuItem,
    SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton,

} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Calendar, Home, Inbox, Search } from "lucide-react";

const sidebarLinks = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "About Us",
        url: "/about-us",
        icon: Inbox,
    },
    {
        title: "My Movies",
        url: "/my-movies",
        icon: Calendar,
    },
    {
        title: "Sign In",
        url: "/sign-in",
        icon: Calendar,
    },
    {
        title: "Sign Up",
        url: "/sign-up",
        icon: Calendar,
    },
    {
        title: "Logout",
        url: "/logout",
        icon: Calendar,
    },
];

const sidebarGenres = ['All', 'Action', 'Thriller', 'Fantasy', 'Sci Fi']

export function SideBar() {
    const location = useLocation();

    const showGenresGroup = location.pathname == "/" || location.pathname == "/my-movies";
    
    return (
        <Sidebar className="border-r-[#201d19]">
            <SidebarHeader className="bg-(--primary-bg-color)" >
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
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent className="mb-2">
                        <SidebarMenu>
                            <SidebarMenuItem className="relative">
                                <Search className="absolute top-[50%] left-[7px] translate-y-[-50%] text-[#6a6565]" size={20} />
                                <Input placeholder="Search Movies" className="border-hidden pl-8" />
                            </SidebarMenuItem>
                            {sidebarLinks.map((item) => (
                                <SidebarMenuItem key={item.title} className="text-[#6a6565]">
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>

                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                    {showGenresGroup &&
                        <SidebarGroupContent>
                            <SidebarMenu className="text-[#6a6565]">
                                <SidebarMenuItem>
                                    <SidebarGroupLabel className="text-white">Genres</SidebarGroupLabel>
                                    <SidebarMenuSub className="border-l-[#201d19]" onClick={(e) => console.log(e.target)}>
                                        {sidebarGenres.map((genre) => (
                                            <SidebarMenuSubItem key={genre} >
                                                <SidebarMenuSubButton className="cursor-pointer">{genre}</SidebarMenuSubButton >
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    }

                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}