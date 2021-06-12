import { HttpClient } from "../data/contracts/http-client"
import { api } from "../main/config/axios"

export class Axios implements HttpClient {

    constructor(private readonly route: string) { }
    async post(body: any, accessToken?: string): Promise<any> {
        try {
            const headers: any = {}
            if (accessToken != undefined) {
                headers.Authorization = `Bearer ${accessToken}`
            }
            const response = await api.post(this.route, body, { headers})
            return response.data
        } catch (error) {
            return new Error(error.response.data.message)
        }
    }

    async put(body: any, accessToken?: string): Promise<any> {
        try {
            const headers: any = {}
            if (accessToken != undefined) {
                headers.Authorization = `Bearer ${accessToken}`
            }
            const response = await api.put(this.route, body, { headers})
            return response.data
        } catch (error) {
            return new Error(error.response.data.message)
        }
    }

    async get(params: any, accessToken?: string): Promise<any> {
        try {
            const headers: any = {}
            if (accessToken != undefined) {
                headers.Authorization = `Bearer ${accessToken}`
            }
            const response = await api.get(this.route, {
                params,
                headers
            })
            return response.data
        } catch (error) {
            return new Error(error.response.data.message)
        }
    }
}