import { SignIn } from "@clerk/nextjs";

export async function generateStaticParams() {
    return [
        { params: { 'sign-in': [] } }, // Adjust 
    ];
}

export default function page() {
    return (
        <SignIn />
    );
}
