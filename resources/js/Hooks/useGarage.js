import { useRef, useState } from "react";
import { saveUser, deleteUser } from "@/Services/garageService";

export const useGarage = (initialData, toast) => {
    const [garage, setGarage] = useState(initialData.data);
    const [client, setClient] = useState(initialData.client);
    const [code, setCode] = useState(initialData.code);
    const garage_type=  useRef(initialData.garage_type);

    const handleSave = async (data) => {
        const res = await saveUser(data);
        setGarage(res.data.data);
        setCode(res.data.code);
        toast.current.show({
            severity: "info",
            summary: "Confirmed",
            detail: res.message,
            life: 3000,
        });
        return res.data.code;
    };

    const handleDelete = async (id) => {
        const res = await deleteUser(id);
        setGarage(res.data.data);
        setCode(res.data.code);
        toast.current.show({
            severity: "info",
            summary: "Confirmed",
            detail: res.message,
            life: 3000,
        });
        return res.data.code;
    };

    // Reset Data
    const resetForm = (form = {}) => {
        return {
            mechanic_name: form.mechanic_name || "",
            code: form.code || "",
            number: form.number || "",
            client_id: form.client_id || "",
            garage_type_id: form.garage_type_id || "",
            address: form.address || "",
        };
    };

    return {
        garage,
        handleSave,
        handleDelete,
        setCode,
        code,
        client,
        resetForm,
        setClient,
        garage_type,
        toast,
    };
};
