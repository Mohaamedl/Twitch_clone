
import { SignUp } from "@clerk/nextjs";

export async function generateStaticParams() {
    return [
        { params: { 'sign-up': [] } }, // Adjust 
    ];
}

export default function SignUpPage() {
    return (
        <SignUp />
    );
}
