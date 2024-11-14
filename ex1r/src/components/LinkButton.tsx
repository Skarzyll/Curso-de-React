import Link from "next/link";

interface LinkButtonProps {
    to: string;
    text: string;
}

export default function LinkButton({to, text}: LinkButtonProps) {
    return (
        <Link href={to}>
            {text}
        </Link>
    )
}