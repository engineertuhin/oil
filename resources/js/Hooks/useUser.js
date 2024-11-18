import { saveUser, deleteUser } from "@/Services/userService";
import { useState } from "react";
import { getAreaService, getUpazilaService } from "@/Services/getPlaceService";

export const useUser = (initialData, toast) => {
    const [user, setUser] = useState(initialData);
    const [gender, setGender] = useState(initialData.gender);
    const [designation, setDesignation] = useState(initialData.designation);
    const [district, setDistrict] = useState(initialData.district);
    const [area, setArea] = useState([]);
    const [upazila, setUpazila] = useState([]);

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

    const getArea = async (id) => {
        const res = await getAreaService(id);
        setArea(res);
    };
    const getUpazila = async (id) => {
        const res = await getUpazilaService(id);
        setUpazila(res);
    };

    return {
        user,
        gender,
        designation,
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
