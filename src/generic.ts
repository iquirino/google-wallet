import { GoogleAuth, GoogleAuthOptions } from "google-auth-library";
import { GenericClass } from "./types/generic/GenericClass.js";
import { Pagination } from "./types/generic/Pagination.js";
import { GenericObject } from "./types/generic/GenericObject.js";

export * from "./types/generic/index.js";

export class GenericClient {
  private readonly httpClient: GoogleAuth;
  private readonly baseUrl = "https://walletobjects.googleapis.com/walletobjects/v1";
  //private batchUrl = "https://walletobjects.googleapis.com/batch";
  private readonly classUrl = `${this.baseUrl}/genericClass`;
  private readonly objectUrl = `${this.baseUrl}/genericObject`;

  constructor(
    credentials: GoogleAuthOptions["credentials"]
  ) {
    this.httpClient = new GoogleAuth({
      credentials,
      scopes: "https://www.googleapis.com/auth/wallet_object.issuer",
    });
  }

  async getClasses(issuerId: string, token?: string, maxResults?: number) {
    const qs = new URLSearchParams({ issuerId });
    if (token) qs.append("token", token);
    if (maxResults) qs.append("maxResults", maxResults.toString());
    const url = `${this.classUrl}?${qs.toString()}`;
    const res = await this.httpClient.request<{
      resources: GenericClass[];
      pagination: Pagination;
    }>({ url });
    return res.data;
  }

  async getClass(issuerId: string, classId: string) {
    try {
      const url = `${this.classUrl}/${issuerId}.${classId}`;
      const res = await this.httpClient.request<GenericClass>({ url });
      return res.data;
    } catch (err) {
      if (typeof err === "object") {
        const objErr = err as any;
        if (objErr.response && objErr.response.status === 404) return undefined;
      }
      throw err;
    }
  }

  async createClass(classObject: GenericClass) {
    const url = this.classUrl;
    const res = await this.httpClient.request<GenericClass>({
      url,
      method: "POST",
      data: classObject,
    });
    return res.data;
  }

  async updateClass(classObject: GenericClass) {
    const url = `${this.classUrl}/${classObject.id}`;
    const res = await this.httpClient.request<GenericClass>({
      url,
      method: "PUT",
      data: classObject,
    });
    return res.data;
  }

  async patchClass(classObject: GenericClass) {
    const url = `${this.classUrl}/${classObject.id}`;
    const res = await this.httpClient.request<GenericClass>({
      url,
      method: "PATCH",
      data: classObject,
    });
    return res.data;
  }

  async getObjects(
    issuerId: string,
    classId: string,
    token?: string,
    maxResults?: number
  ) {
    const qs = new URLSearchParams({ classId: `${issuerId}.${classId}` });
    if (token) qs.append("token", token);
    if (maxResults) qs.append("maxResults", maxResults.toString());
    const url = `${this.objectUrl}?${qs.toString()}`;
    const res = await this.httpClient.request<{
      resources: GenericObject[];
      pagination: Pagination;
    }>({ url });
    return res.data;
  }

  async getObject(issuerId: string, objectId: string) {
    try {
      const url = `${this.objectUrl}/${issuerId}.${objectId}`;
      const res = await this.httpClient.request<GenericObject>({ url });
      return res.data;
    } catch (err) {
      if (typeof err === "object") {
        const objErr = err as any;
        if (objErr.response && objErr.response.status === 404) return undefined;
      }
      throw err;
    }
  }

  async createObject(object: GenericObject) {
    const url = this.objectUrl;
    const res = await this.httpClient.request<GenericObject>({
      url,
      method: "POST",
      data: object,
    });
    return res.data;
  }

  async updateObject(object: GenericObject) {
    const url = `${this.objectUrl}/${object.id}`;
    const res = await this.httpClient.request<GenericObject>({
      url,
      method: "PUT",
      data: object,
    });
    return res.data;
  }

  async patchObject(object: GenericObject) {
    const url = `${this.objectUrl}/${object.id}`;
    const res = await this.httpClient.request<GenericObject>({
      url,
      method: "PATCH",
      data: object,
    });
    return res.data;
  }
}
