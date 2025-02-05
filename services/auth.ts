import api from "./api";

type RegisterResponse = {
  message: string;
};

export const register = async (username: string, email: string, password: string) => {
  try {
    const response = await api.post<RegisterResponse>("/usercreate", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error en el registro", error);
    throw error;
  }
};
