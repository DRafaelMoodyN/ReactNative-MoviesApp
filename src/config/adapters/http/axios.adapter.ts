import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./http.adapter";

interface IOptions {
    baseUrl: string,
    params: Record<string, string>
}

export class AxiosAdapter implements HttpAdapter {

    private axiosInstance: AxiosInstance;

    constructor(option: IOptions) {
        this.axiosInstance = axios.create({
            baseURL: option.baseUrl,
            params: option.params
        })
    }

    async get<T>(url: string, options?: Record<string, unknown> | undefined): Promise<T> {
        try {
            const { data } = await this.axiosInstance.get(url)
            return data

        } catch (error) {
            throw new Error(`Error axios url:${url} get: ${error} `)
        }
    }

}