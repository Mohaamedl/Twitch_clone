"use client"

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar"
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Hint } from "@/components/ui/hint";

export const Toggle = () => {
    const {    
        collapsed, onExpand, onCollapse 
    } = useSidebar((state) => state)
    const label = collapsed ? "Expand" : "Collapse";
    return (
        <>  
            {collapsed && (
                <div className = " lg:flex w-full items-center justify-center pt-4 mb-4">
                    <Hint label = {label} side="right" asChild>
                    <Button 
                    onClick={onExpand}
                    variant="ghost"
                    className="h-auto pb-2"
                    >
                        <ArrowRightFromLine
                        className="h-4 w-4"
                        />
                    </Button>
                    </Hint>
                </div>
            )}
            {!collapsed && (
                <div className ="p-3 pl-6 mb-2 flex items-center w-full">
                    <p className = " font-semibold text-primary">
                        for u ehehe
                    </p>
                    <Hint label = {label} side="right" asChild>
                    <Button
                     className=" h-auto ml-auto p-2 " 
                     variant= "ghost"
                     onClick={onCollapse}>
                        <ArrowLeftFromLine className = "h-4 w-4"/>
                    </Button>
                    </Hint>
                </div>
            )}
        </>
    )
}