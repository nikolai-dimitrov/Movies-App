import { useState, useEffect, useRef, useContext } from "react";

import { MoviesContext } from "../../contexts/MoviesContext";
import { useDebounce } from "../../hooks/useDebounce"

import { SidebarMenuItem } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SideBarSearchField = ({ isPageContainMovies, pathname }) => {
    const [inputValue, setInputValue] = useState("");
    const [debounceInputValue] = useDebounce(inputValue, 500);
    const inputRef = useRef(null);
    const { setSearchedMovieTitle } = useContext(MoviesContext);

    useEffect(() => {
        if (["/", "/my-movies"].includes(pathname)) {
            inputRef.current?.focus();

        }
        setInputValue((inputValue) => inputValue = "");

    }, [pathname]);

    useEffect(() => {
        setSearchedMovieTitle((movieTitle) => movieTitle = debounceInputValue);
    }, [debounceInputValue]);


    const changeInputHandler = (e) => {
        setInputValue((inputValue) => inputValue = e.target.value);
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