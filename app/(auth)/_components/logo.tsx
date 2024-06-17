import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins ({
    subsets:["latin"],
    weight : ["100","200","300","400","500","600","800","900","700"]
}
);

export const Logo = () =>{
    return (
        <div className = "flex flex-col items-center gap-y-4">
            <div className ="bg-white rounded-full p-1">
                <Image 
                src ="/logo_tw.png"
                alt="logo"
                height="90"
                width="90"
                />
            </div>
            <div className ={cn(

            "flex flex-col items-center",
                font.className,
            )}> 
                <p className="text-xl font-semibold">GameLive
                </p>
                <p className ="text-sm text-muted-foreground">
                    Let&apos;s have fun!
                </p>
            </div>
            
        </div>
    )
}