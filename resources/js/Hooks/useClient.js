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

    const getDistrict = async (ids) => {

      
        const res = await getDistrictService(JSON.stringify([ids]));
        setDistrict(res);
    };
    const getArea = async (ids) => {
        const res = await getAreaService(JSON.stringify([ids]));
        setArea(res);
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
    };
};
