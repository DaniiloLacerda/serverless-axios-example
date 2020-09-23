export interface AuthRequest {
    appId: string;
    appPassword: string;
    platformUser: string;
}

export interface AuthResponse {
    accessToken: string;
    userName: string;
}
