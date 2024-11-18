import axios from "axios";

export const getAreaService = async (id) => {
    const response = await axios.post(route("getArea", id));
    return response.data;
};

export const getUpazilaService = async (id) => {
    const response = await axios.post(route("getUpazila", id));
    return response.data;
};

