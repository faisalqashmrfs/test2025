export interface UserDto {
  id: string;
  email: string;
  fullName: string;
  role: "admin" | "company" | "customer";
  createdAt: string;
}