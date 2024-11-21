import Link from "next/link";

interface LinkButtonProps {
    to: string;
    text: string;
}

export default function LinkButton({to, text}: LinkButtonProps) {
    return (
        <Link href={to} className="p-2 bg-zinc-900 text-yellow-500">
            {text}
        </Link>
    )
}