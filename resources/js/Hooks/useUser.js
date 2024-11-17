import { saveUser,deleteUser } from "@/Services/userService";
import { useState, } from "react";

export const useUser = (initialData, toast) => {
    const [user, setUser] = useState(initialData);

    const handleSave = async (data) => {
        const res = await saveUser(data);
        setUser(res.data);
        toast.current.show({
            severity: "info",
            summary: "Confirmed",
            detail: res.data.message,
            life: 3000,
        });
    };

    const handleDelete = async (id) => {
        const res = await deleteUser(id);
        setUser(res.data);
        toast.current.show({
            severity: "info",
            summary: "Confirmed",
            detail: res.message,
            life: 3000,
        });
    };

    return { user, handleSave, handleDelete, toast };
};
