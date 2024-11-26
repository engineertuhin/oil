import { useState } from "react";
import { saveUser, deleteUser } from "@/Services/retailerService";

export const useRetailer = (initialData, toast) => {
    const [retailer, setRetailer] = useState(initialData.data);
    const [client, setClient] = useState(initialData.client);
    const [code, setCode] = useState(initialData.code);
    const handleSave = async (data) => {
        const res = await saveUser(data);
   
        
        setRetailer(res.data.data);
        setCode(res.data.code);
        toast.current.show({
            severity: "info",
            summary: "Confirmed",
            detail: res.message,
            life: 3000,
        });
        return res.data.code
    };

    const handleDelete = async (id) => {
        const res = await deleteUser(id);
        setRetailer(res.data.data);
        setCode(res.data.code);
        toast.current.show({
            severity: "info",
            summary: "Confirmed",
            detail: res.message,
            life: 3000,
        });
        return res.data.code

    };

    // Reset Data
    const resetForm = (form = {}) => {
        return {
            name: form.name || "",
            code: form.code || "",
            number: form.number || "",
            client_id: form.client_id || "",
            address: form.address || "",
        };
    };

    return {
        retailer,
        handleSave,
        handleDelete,
        setCode,
        code,
        client,
        resetForm,
        setClient,
        toast,
    };
};
