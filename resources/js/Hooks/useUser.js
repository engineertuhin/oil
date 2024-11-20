import { saveUser, deleteUser } from "@/Services/userService";
import { useState } from "react";
import { getAreaService, getZoneService } from "@/Services/getPlaceService";

export const useUser = (initialData, toast) => {
    const [user, setUser] = useState(initialData.data);
    const [gender, setGender] = useState(initialData.gender);
    const [designation, setDesignation] = useState(initialData.designation);
    const [district, setDistrict] = useState(initialData.district);
    const [area, setArea] = useState([]);
    const [zone, setZone] = useState([]);
    const [filteredArea, setFilteredArea] = useState(null);

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

    const getArea = async (id) => {
        const res = await getAreaService(id);
        setArea(res);
    };
    const getZone = async (id) => {
        const res = await getZoneService(id);
  
        setZone(res);
    };

    const searchZone = (event) => {
        
        setTimeout(() => {
            let _filteredArea;
            if (!event.query.trim().length) {
                _filteredArea = [...area];
            } else {
                _filteredArea = area.filter((list) => {
                    return list.name
                        .toLowerCase()
                        .startsWith(event.query.toLowerCase());
                });
            }

            setFilteredArea(_filteredArea);
        }, 250);
    };

    return {
        user,
        gender,
        designation,
        district,
        getArea,
        area,
        getZone,
        zone,
        setZone,
        setArea,
        handleSave,
        handleDelete,
        searchZone,
        setFilteredArea,
        filteredArea,

        toast,
    };
};
