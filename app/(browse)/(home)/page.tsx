import { UserButton } from "@clerk/nextjs";

export default function page() {
  return (
    <>
    <div>
      <h1>Dashboard</h1>
      
      
      <UserButton afterSignOutUrl="/" />
      <UserButton signInUrl="/app/(auth)/sign-in/[[...sign-in]]/page.tsx"/>
      
      
    </div>
    </>
  );
}
