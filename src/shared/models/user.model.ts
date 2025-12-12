import { format } from "date-fns";
import { Image } from "./image.model";
import { Role } from "./roles.model";

export class User {
  #id: number;
  #firstName: string;
  #lastName: string;
  #name: string;
  #email: string;
  #role: Role;
  #avatar: Image;
  #createdAt: string;
  #updatedAt: string;

  #originalData: any;

  constructor(data: any = {}) {
    this.#id = data?.id ?? null;
    this.#firstName = data?.firstName ?? "";
    this.#lastName = data?.lastName ?? "";
    this.#email = data?.email ?? "";
    this.#name = this.#firstName + " " + this.#lastName;
    this.#role = data?.role ?? Role.USER;
    this.#avatar = data?.avatar ? new Image(data.avatar) : new Image();
    this.#createdAt = data?.createdAt
      ? format(new Date(data.createdAt), "yyyy-MM-dd hh:mm a")
      : "";
    this.#updatedAt = data?.updatedAt
      ? format(new Date(data.updatedAt), "yyyy-MM-dd hh:mm a")
      : "";

    this.#originalData = data;
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  get firstName() {
    return this.#firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get avatar() {
    return this.#avatar;
  }
  get email() {
    return this.#email;
  }
  get role() {
    return this.#role;
  }
  get createdAt() {
    return this.#createdAt;
  }
  get updatedAt() {
    return this.#updatedAt;
  }

  get originalData() {
    return this.#originalData;
  }
}
