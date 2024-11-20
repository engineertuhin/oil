import axios from "axios";

export const getAreaService = async (id) => {
    const response = await axios.post(route("getArea", id));
    return response.data;
};

export const getZoneService = async (id) => {
    const response = await axios.post(route("getZone", id));
    return response.data;
};

