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
    const [code, setCode] = useState(initialData.code);

    const handleSave = async (data) => {
        const res = await saveUser(data);
        setUser(res.data.user);
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
        setUser(res.data.user);
        setCode(res.data.code);
        toast.current.show({
            severity: "info",
            summary: "Confirmed",
            detail: res.message,
            life: 3000,
        });
        return res.data.code;
    };

    const getDistrict = async (ids) => {
        const res = await getDistrictService(JSON.stringify(ids));
        setDistrict(res.district);
    };
    const getArea = async (ids) => {
        const res = await getAreaService(JSON.stringify(ids));
        setArea(res.areas);
    };
    // Reset Data
    const resetForm = (form = {}) => {
        return {
            name: form.name || "",
            code: form.code || "",
            number: form.number || "",
            id: form.id || "",
            email: form.email || "",
            password: form.password || "",
            nid: form.nid || "",
            date_of_birth: form.date_of_birth || "",
            join_date: form.join_date || "",
            discontinue: form.discontinue || "",
            gender: form.gender || "",
            employ_hierarchies_id: form.employ_hierarchies_id || "",
            district_id: form.district_id || "",
            area_id: form.area_id || "",
            zone_id: form.zone_id || "",
        };
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
        resetForm,
        setCode,
        code,
        toast,
    };
};
