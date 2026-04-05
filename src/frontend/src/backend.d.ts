import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactRequest {
    name: string;
    email: string;
    message: string;
}
export interface Watch {
    name: string;
    description: string;
    category: string;
    price: bigint;
}
export interface backendInterface {
    addWatch(watch: Watch): Promise<void>;
    getAllContactRequests(): Promise<Array<ContactRequest>>;
    getAllWatches(): Promise<Array<Watch>>;
    getRequest(name: string): Promise<ContactRequest>;
    getWatch(name: string): Promise<Watch>;
    submitContactRequest(request: ContactRequest): Promise<void>;
    subscribeNewsletter(email: string): Promise<void>;
}
