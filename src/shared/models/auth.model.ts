import { Role } from "./roles.model";

export class Auth {
  private id: number;
  private name: string;
  private email: string;
  private firstName: string;
  private lastName: string;
  private role: Role;

  private original: Record<string, any>;

  constructor(data: Record<string, any>) {
    this.id = data?.id || null;
    this.email = data?.email || "";
    this.firstName = data?.firstName ?? "";
    this.lastName = data.lastName ?? "";
    this.role = data?.role ?? Role.USER;
    this.name = this.firstName + " " + this.lastName;

    this.original = data;
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getRole() {
    return this.role;
  }

  getOriginal() {
    return this.original;
  }
}
