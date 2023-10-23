"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";
import { Trash2 } from "lucide-react"
import { Button } from "./ui/button";

const DeleteButton = ({ id }: { id: string }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <p>Loading delete</p>;
    }

    if (status === "unauthenticated" || !session?.user.isAdmin) {
        return;
    }

    const handleDelete = async () => {
        const shouldDelete = window.confirm("確定要刪除這個產品嗎 🤔？");

        if (shouldDelete) {
            const res = await fetch(`http://localhost:3000/api/products/${id}`, {
                method: "DELETE",
            });

            if (res.status === 200) {
                router.back();
                toast("♻ The product has been deleted");
            } else {
                const data = await res.json();
                toast.error(data.message);
            }
        } else {
            return
        }
    }

    return (
    <Button
        variant="destructive"
        className="rounded-full top-0 right-6 absolute"
        onClick={handleDelete}
    >
        <Trash2 width={20} height={20}/>
    </Button>
    );
};

export default DeleteButton;