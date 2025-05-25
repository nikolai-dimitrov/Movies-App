import { SidebarMenuItem } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";


export const SideBarSearchField = ({inputRef, isPageContainMovies}) => {
    return (
        <SidebarMenuItem className="mb-2 relative">
            <Search className="absolute top-[50%] left-[7px] translate-y-[-50%] text-[#6a6565]" size={20} />
            <Input ref={inputRef} placeholder="Search Movies" className="border-hidden pl-8" disabled={!isPageContainMovies} />
        </SidebarMenuItem>
    )
}