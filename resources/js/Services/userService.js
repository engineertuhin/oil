import axios from "axios";

export const saveUser = async (data) => {
    const response = await axios.post(route("user.store"), data);
    return response.data;
};

export const deleteUser = async (id) => {
    const response = await axios.delete(route("user.destroy", id));
    return response.data;
};
