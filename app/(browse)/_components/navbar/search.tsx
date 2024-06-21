"use client";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export const Search = () => {
    const router = useRouter();
    const [value,setValue] = useState("");
    const onSubmit = (e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();

        if (!value) return;
        const url =qs.stringifyUrl({
            url:"/search",
            query:{term:value},},
            {skipEmptyString:true});
        router.push(url)

    };
    const onClear =() => {
        setValue("");
    }

    return(
        <form 
        onSubmit={onSubmit}
        className = "relative w-full lg:w-[400px] flex items-center"
        >
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search"
                className="rounded-r-none focus-visible:ring-0 
                focus-visible:ring-transparent focus-visible:ring-offset-0"
            />
            {value&& (
                <X
                className="absolute top-2.5 right-14 h-5 w-6 text-muted-foreground 
                cursor-pointer hover:opacity-75 transition "
                onClick={onClear}
                
                />
            )}
            <Button 
            className="rounded-l-none "
            type="submit"
            size="sm"
            variant="secondary"
             >
                <SearchIcon className="h-5 w-5 text-muted-foreground" />
            </Button>
            
        </form>
    )
}