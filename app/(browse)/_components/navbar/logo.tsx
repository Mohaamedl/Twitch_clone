import { cn } from "@/lib/utils";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins ({
    subsets:["latin"],
    weight : ["100","200","300","400","500","600","800","900","700"]
}
);

export const Logo = () =>{
    return (
        <Link href="/">
            <div className="flex lg:flex items-center gap-x-4 hover:opacity-75
             transition">
                <div className ="bg-white rounded-full p-1 mr-10 shrink-0 
                lg:mr-2 lg:shrink">
                    <Image 
                    src="/logo_tw.png"
                    alt="GameLive"
                    height="32"
                    width="32"

                    />
                </div>
                <div className={
                    cn("hidden lg:block",
                        font.className
                    )
                    }>
                    <p className="text-lg font-semibold">
                    GameLive
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Let&apos;s have fun
                    </p>
                </div>
            </div>
        </Link>
    )
}