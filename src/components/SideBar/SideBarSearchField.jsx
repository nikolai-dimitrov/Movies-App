import { useState, useEffect, useRef } from "react";

import { SidebarMenuItem } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";



export const SideBarSearchField = ({ isPageContainMovies, pathname }) => {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (["/", "/my-movies"].includes(pathname)) {
            inputRef.current?.focus();

        }

        setInputValue((inputValue) => "");

    }, [pathname]);


    const changeInputHandler = (e) => {
        setInputValue((inputValue) => inputValue = e.target.value)
    };

    return (
        <SidebarMenuItem className="mb-2 relative">
            <Search className="absolute top-[50%] left-[7px] translate-y-[-50%] text-[#6a6565]" size={20} />
            <Input
                onChange={changeInputHandler}
                value={inputValue}
                ref={inputRef}
                name="searchField"
                placeholder="Search Movies"
                className="border-hidden pl-8"
                disabled={!isPageContainMovies} />
        </SidebarMenuItem>
    )
}