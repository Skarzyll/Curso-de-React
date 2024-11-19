"use client";

import { useRouter } from "next/navigation";

export default function CardDeleteButton({ id }: { id: string }) {
    const router = useRouter();
    const handleDelete = async (id : string) => {
        try {
            await fetch(`http://localhost:9090/projects/${id}`, {
                method: "DELETE",
            });
            router.push(`http://localhost:9090/projects/${id}`);
            setTimeout(() => {
                router.push("/")
            }, 3000)
        } catch (error) {
            console.log("error ===> ", error);
        }
    };

    return <button onClick={() => handleDelete(id)}>Delete</button>
}