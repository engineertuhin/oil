
import axios from "axios";

export const saveDistrict = async (data) => {
    const response = await axios.post(route("districts.store"), data);
    return response.data;
};

export const deleteDistrict = async (id) => {
    const response = await axios.delete(route("districts.destroy", id));
    return response.data;
};
