import { Link } from "react-router-dom";

interface LinkButtonProps {
    to: string;
    text: string;
}

export default function LinkButton({to, text}: LinkButtonProps) {
    return (
        <Link to={to}>
            {text}
        </Link>
    )
}