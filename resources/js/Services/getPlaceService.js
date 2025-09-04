import axios from "axios";

export const getAreaService = async (ids) => {
    const response = await axios.post(route("getArea", ids));
    return response.data;
};

export const getDistrictService = async (ids) => {
    const response = await axios.post(route("getDistrict", ids));
    return response.data;
};

