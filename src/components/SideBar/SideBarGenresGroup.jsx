import { motion, AnimatePresence } from "framer-motion";

import {
    SidebarGroup, SidebarMenu, SidebarGroupLabel, SidebarGroupContent,
    SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton,

} from "@/components/ui/sidebar";

const sidebarGenres = ['All', 'Action', 'Thriller', 'Fantasy', 'Sci Fi'];



export const SideBarGenresGroup = ({ isPageContainMovies, genre, setGenre }) => {
    return (
        <AnimatePresence>
            {isPageContainMovies &&
                <motion.div
                    transition={{
                        duration: 0.3
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <SidebarGroup className="pl-0">
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
                    </SidebarGroup>
                </motion.div>
            }
        </AnimatePresence>
    )
}