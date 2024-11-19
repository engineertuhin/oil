import axios from "axios";

export const saveUser = async (data) => {
    const response = await axios.post(route("client.store"), data);
    return response.data;
};

export const deleteUser = async (id) => {
    const response = await axios.delete(route("client.destroy", id));
    return response.data;
};
