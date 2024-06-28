"use client"
import { useSidebar } from "@/store/use-sidebar";
import {    cn } from "@/lib/utils";
interface WrapperProps {

children: React.ReactNode;
}

export const Wrapper=(
    {
        children,
    }:WrapperProps) => {
        const { collapsed} = useSidebar((state) =>state)
        return (
            <aside
            className={cn(
                "fixed left-0 flex flex-col w-60 h-full bg-[#211323] border-r border-[#120c1b] z-[50]",
                collapsed && "w-70"
            )}
                
            >
                {children}
            </aside>
        )
    }
