import axios from "axios";

export const getAreaService = async (ids) => {
    const response = await axios.post(route("getArea", ids));
    return response.data;
};

export const getDistrictService = async (ids) => {
    const response = await axios.post(route("getDistrict", ids));
    return response.data;
};

export const getClientService = async (key,value) => {
    const response = await axios.post(route("getClient"), { key, value });
    return response.data;
};


export const getUserService = async (id) => {

    const response = await axios.post(route("getUser", id));
    return response.data;
};
