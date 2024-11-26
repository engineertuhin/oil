import { useState } from "react";
import { getDistrictService, getAreaService } from "@/Services/getPlaceService";
import { saveUser, deleteUser } from "@/Services/clientService";

export const useClient = (initialData, toast) => {
    const [client, setClient] = useState(initialData.data);
    const [gender, setGender] = useState(initialData.gender);
    const [type, setType] = useState(initialData.designation);
    const [users, serUsers] = useState(initialData.user);
    const [district, setDistrict] = useState([]);
    const [area, setArea] = useState([]);
    const [zone, setZone] = useState(initialData.zone);
    const [code, setCode] = useState(initialData.code);
    const [loading, setLoading] = useState(false);

    const handleSave = async (data) => {
        if(!loading){
            setLoading(true);
            const res = await saveUser(data);
            setClient(res.data.client);
            setCode(res.data.code);
            setLoading(false);
            toast.current.show({
                severity: "info",
                summary: "Confirmed",
                detail: res.message,
                life: 3000,
            });

            return res.data.code;
        }
    };

    const handleDelete = async (id) => {
        const res = await deleteUser(id);
        console.log(res);
        setClient(res.data.client);
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
        const res = await getDistrictService(JSON.stringify([ids]));
        setDistrict(res);
    };
    const getArea = async (ids) => {
        const res = await getAreaService(JSON.stringify([ids]));
        setArea(res);
    };

    // Reset Data
    const resetForm = (form = {}) => {
        console.log(form)
        return {
            name: form.name || "",
            code: form.code || "",
            id: form.id || "",
            number: form.number || "",
            nid: form.nid || "",
            gender: form.gender || "",
            type: form.type || "",
            district_id: form.district_id || "",
            area_id: form.area_id || "",
            zone_id: form.zone_id || "",
            store_name: form.store_name || "",
            store_representative: form.store_representative || "",
            user_id: form.user_id || "",
            address: form.address || "",
        };
    };

    return {
        client,
        gender,
        type,
        district,
        getDistrict,
        area,
        getArea,
        zone,
        setZone,
        setArea,
        handleSave,
        handleDelete,
        users,
        toast,
        code,
        resetForm,
    };
};
