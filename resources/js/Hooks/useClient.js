import { useState } from "react";
import {
    getDistrictService,
    getAreaService,
    getClientService,
    getUserService,
} from "@/Services/getPlaceService";
import { saveUser, deleteUser } from "@/Services/clientService";

export const useClient = (initialData, toast) => {
console.log(initialData);

    const [client, setClient] = useState(initialData.data);
    const [gender, setGender] = useState(initialData.gender);
    const [fleet, setFleet] = useState(initialData.fleet);
    const [type, setType] = useState(initialData.designation);
    const [garage, setGarage] = useState(initialData.garage);
    const [users, serUsers] = useState([]);
    const [district, setDistrict] = useState([]);
    const [area, setArea] = useState([]);
    const [zone, setZone] = useState(initialData.zone);
    const [code, setCode] = useState(initialData.code);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(false);
    const [selectedClient, setSleetedClient] = useState([]);
    // Save Data
    const handleSave = async (data) => {
        if (!loading) {
            // setLoading(true);
            const res = await saveUser(data);
            setClient(res.data.client);
            setCode(res.data.code);
            // setLoading(false);
            toast.current.show({
                severity: "info",
                summary: "Confirmed",
                detail: res.message,
                life: 3000,
            });

            return res.data.code;
        }
    };
    // Delete Data
    const handleDelete = async (id) => {
        const res = await deleteUser(id);

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
    // get district
    const getDistrict = async (ids) => {
        const res = await getDistrictService(JSON.stringify([ids]));
        serUsers(res.user);
        setDistrict(res.district);
    };
    //get Area
    const getArea = async (ids) => {
        const res = await getAreaService(JSON.stringify([ids]));
        serUsers(res.user);
        setArea(res.areas);
    };

    //get Client
    const getClient = async (key, value) => {
        const res = await getClientService(key, value);
        setSleetedClient(res);
    };


    //get user
    const getUser = async (id) => {
   
        const res = await getUserService(id);
        serUsers(res);
    };

    // Reset Data
    const resetForm = (form = {}) => {
        return {
            name: form.name || "",
            code: form.code || "",
            id: form.id || "",
            number: form.number || "",
            nid: form.nid || "",
            gender: form.gender || "",
            client_hierarchies_id: form.client_hierarchies_id || "",
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
        status,
        setStatus,
        getClient,
        selectedClient,
        getUser,
        garage,
        fleet,
        resetForm,
    };
};
