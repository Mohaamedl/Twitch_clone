import { Toggle, ToggleSkeleton } from "./toggle"
import { Wrapper } from "./wrapper"
import { Recommended, RecommendedSkeleton } from "./recommended"
import { getRecommended } from "@/lib/recommendation_service"

export const Sidebar = async () => {
    let recommended;
    
    try {
        recommended = await getRecommended();
        
    } catch (error) {
        console.error("Failed to fetch recommendations:", error);
        
    }

    return (
        <Wrapper>
            <Toggle/>
            <div className="space-y-4 pt-4 lg:pt-0">
                <Recommended data={recommended || []}/>
            </div>
        
        </Wrapper>
    )
}
export const SidebarSkeleton = () => {
    return(
        <aside  className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50">
            <ToggleSkeleton/>
            <RecommendedSkeleton/>
        </aside>
    )
}