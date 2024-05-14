import client from "../client";

export const login = (params: any) => {
    return client.post("/company/auth/login", params);
};

export const getRefreshToken = (params: any) => {
    return client.post("/company/auth/access-token", params);
};

export const validateToken = (params: any) => {
    return client.get(`/company/auth/token/${params}`);
};

export const resetPassword = (params: any) => {
    return client.post("/company/auth/reset-password", params);
};

export const resetPasswordLink = (params: any) => {
    return client.post("/company/auth/password/reset-link", params);
};

export const sendError = (location: string, params: any) => {
    return client.post("/error/front_end", { location, message: params });
};
