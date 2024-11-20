import { useState } from "react";
import { getAreaService, getZoneService } from "@/Services/getPlaceService";
import { saveUser, deleteUser } from "@/Services/clientService";

export const useClient = (initialData, toast) => {
    const [client, setClient] = useState(initialData.data);
    const [gender, setGender] = useState(initialData.gender);
    const [type, setType] = useState(initialData.designation);
    const [district, setDistrict] = useState(initialData.district);
    const [area, setArea] = useState([]);
    const [zone, setZone] = useState([]);

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
    const getZone = async (id) => {
        const res = await getZoneService(id);
        setZone(res);
    };

    return {
        client,
        gender,
        type,
        district,
        getArea,
        area,
        getZone,
        zone,
        setArea,
        setZone,
        handleSave,
        handleDelete,
        toast,
    };
};
