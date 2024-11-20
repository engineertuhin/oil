import { saveUser, deleteUser } from "@/Services/userService";
import { useState } from "react";
import { getDistrictService, getAreaService } from "@/Services/getPlaceService";

export const useUser = (initialData, toast) => {
    const [user, setUser] = useState(initialData.data);
    const [gender, setGender] = useState(initialData.gender);
    const [designation, setDesignation] = useState(initialData.designation);
    const [district, setDistrict] = useState([]);
    const [area, setArea] = useState([]);
    const [zone, setZone] = useState(initialData.zone);


    const handleSave = async (data) => {
        const res = await saveUser(data);
        setUser(res.data);
        console.log(res);
        
        toast.current.show({
            severity: "info",
            summary: "Confirmed",
            detail: res.message,
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

    const getDistrict = async (ids) => {
        const res = await getDistrictService(JSON.stringify(ids));
        setDistrict(res);
    };
    const getArea = async (ids) => {
        const res = await getAreaService(JSON.stringify(ids));
        setArea(res);
    };


    return {
        user,
        gender,
        designation,
        district,
        getDistrict,
        area,
        getArea,
        zone,
        setZone,
        setArea,
        handleSave,
        handleDelete,
        toast,
    };
};
