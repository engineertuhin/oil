import { useState } from "react";
import { getAreaService, getUpazilaService } from "@/Services/getPlaceService";
import { saveUser, deleteUser } from "@/Services/clientService";

export const useClient = (initialData, toast) => {
    const [client, setClient] = useState(initialData.data);
    const [gender, setGender] = useState(initialData.gender);
    const [type, setType] = useState(initialData.designation);
    const [district, setDistrict] = useState(initialData.district);
    const [area, setArea] = useState([]);
    const [upazila, setUpazila] = useState([]);

    const handleSave = async (data) => {
        const res = await saveUser(data);
        setClient(res.data);

        toast.current.show({
            severity: "info",
            summary: "Confirmed",
            detail: res.message,
            life: 3000,
        });
    };

    const handleDelete = async (id) => {
        const res = await deleteUser(id);
        setClient(res.data);
        toast.current.show({
            severity: "info",
            summary: "Confirmed",
            detail: res.message,
            life: 3000,
        });
    };

    const getArea = async (id) => {
        const res = await getAreaService(id);
        setArea(res);
    };
    const getUpazila = async (id) => {
        const res = await getUpazilaService(id);
        setUpazila(res);
    };

    return {
        client,
        gender,
        type,
        district,
        getArea,
        area,
        getUpazila,
        upazila,
        handleSave,
        handleDelete,
        toast,
    };
};
