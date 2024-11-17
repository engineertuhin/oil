import { saveDistrict, deleteDistrict } from "@/Services/districtsService";
import { useState, useRef } from "react";

export const useDistricts = (initialData, toast) => {
    const [districts, setDistricts] = useState(initialData);

    const handleSave = async (district) => {
        const res = await saveDistrict(district);
        setDistricts(res.data);
        toast.current.show({
            severity: "info",
            summary: "Confirmed",
            detail: res.data.message,
            life: 3000,
        });
    };

    const handleDelete = async (id) => {
        const res = await deleteDistrict(id);
        setDistricts(res.data);
        toast.current.show({
            severity: "info",
            summary: "Confirmed",
            detail: res.message,
            life: 3000,
        });
    };

    return { districts, handleSave, handleDelete, toast };
};
