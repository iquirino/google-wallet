import { GoogleAuth, GoogleAuthOptions } from "google-auth-library";
import { GiftCardClass } from "./types/retail/gift-card/GiftCardClass.js";
import { Pagination } from "./types/retail/gift-card/Pagination.js";
import { GiftCardObject } from "./types/retail/gift-card/GiftCardObject.js";
import { AddMessageRequest } from "./types/retail/gift-card/AddMessageRequest.js";

export class GiftCardClient {
  private readonly httpClient: GoogleAuth;
  private readonly baseUrl = "https://walletobjects.googleapis.com/walletobjects/v1";
  //private batchUrl = "https://walletobjects.googleapis.com/batch";
  private readonly classUrl = `${this.baseUrl}/giftCardClass`;
  private readonly objectUrl = `${this.baseUrl}/giftCardObject`;

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
      resources: GiftCardClass[];
      pagination: Pagination;
    }>({ url });
    return res.data;
  }

  async getClass(issuerId: string, classId: string) {
    try {
      const url = `${this.classUrl}/${issuerId}.${classId}`;
      const res = await this.httpClient.request<GiftCardClass>({ url });
      return res.data;
    } catch (err) {
      if (typeof err === "object") {
        const objErr = err as any;
        if (objErr.response && objErr.response.status === 404) return undefined;
      }
      throw err;
    }
  }

  async createClass(classObject: GiftCardClass) {
    const url = this.classUrl;
    const res = await this.httpClient.request<GiftCardClass>({
      url,
      method: "POST",
      data: classObject,
    });
    return res.data;
  }

  async updateClass(classObject: GiftCardClass) {
    const url = `${this.classUrl}/${classObject.id}`;
    const res = await this.httpClient.request<GiftCardClass>({
      url,
      method: "PUT",
      data: classObject,
    });
    return res.data;
  }

  async patchClass(classObject: GiftCardClass) {
    const url = `${this.classUrl}/${classObject.id}`;
    const res = await this.httpClient.request<GiftCardClass>({
      url,
      method: "PATCH",
      data: classObject,
    });
    return res.data;
  }

  async addClassMessage(
    issuerId: string,
    classId: string,
    message: AddMessageRequest
  ) {
    const url = `${this.classUrl}/${issuerId}.${classId}/addMessage`;
    const res = await this.httpClient.request<{ resource: GiftCardClass }>({
      url,
      method: "POST",
      data: message,
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
      resources: GiftCardObject[];
      pagination: Pagination;
    }>({ url });
    return res.data;
  }

  async getObject(issuerId: string, objectId: string) {
    try {
      const url = `${this.objectUrl}/${issuerId}.${objectId}`;
      const res = await this.httpClient.request<GiftCardObject>({ url });
      return res.data;
    } catch (err) {
      if (typeof err === "object") {
        const objErr = err as any;
        if (objErr.response && objErr.response.status === 404) return undefined;
      }
      throw err;
    }
  }

  async createObject(object: GiftCardObject) {
    const url = this.objectUrl;
    const res = await this.httpClient.request<GiftCardObject>({
      url,
      method: "POST",
      data: object,
    });
    return res.data;
  }

  async updateObject(object: GiftCardObject) {
    const url = `${this.objectUrl}/${object.id}`;
    const res = await this.httpClient.request<GiftCardObject>({
      url,
      method: "PUT",
      data: object,
    });
    return res.data;
  }

  async patchObject(object: GiftCardObject) {
    const url = `${this.objectUrl}/${object.id}`;
    const res = await this.httpClient.request<GiftCardObject>({
      url,
      method: "PATCH",
      data: object,
    });
    return res.data;
  }

  async addObjectMessage(
    issuerId: string,
    objectId: string,
    message: AddMessageRequest
  ) {
    const url = `${this.objectUrl}/${issuerId}.${objectId}/addMessage`;
    const res = await this.httpClient.request<{ resource: GiftCardObject }>({
      url,
      method: "POST",
      data: message,
    });
    return res.data;
  }
}
