import { AxiosInstance } from "axios";
import Axios from "axios";
import { stringify } from "querystring";
import { AuthRequest, AuthResponse } from "../interfaces/request.interface";

export class IntegrationService {
    private api: AxiosInstance;
    private CONTENT_TYPE_JSON = "application/json";

    constructor() {
        this.api = Axios.create({
            baseURL: "http://urlbase.com.br"
        });
    }

    private getDefaultHeaders = (token: string = "") => token
        ? { Authorization: `${token}`, 'Content-Type': this.CONTENT_TYPE_JSON }
        : { 'Content-Type': this.CONTENT_TYPE_JSON };

    async auth(params: AuthRequest): Promise<AuthResponse> {
        const resource = "token";
        const { appId, appPassword, platformUser } = params;
        const credentials = stringify({ grant_type: "password", userName: appId, password: appPassword, platformUser: platformUser });

        const response = await this.api.post(resource, credentials, { headers: this.getDefaultHeaders() });
        const { userName, access_token } = response.data;

        return { accessToken: access_token, userName: userName };
    }
}