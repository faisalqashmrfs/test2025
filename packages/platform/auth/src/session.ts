import { UserDto } from "@xcarbox/contracts";

export interface Session {
  user: UserDto | null;
  isAuthenticated: boolean;
}

export function hasRole(user: UserDto | null, role: UserDto["role"]): boolean {
  if (!user) return false;
  return user.role === role;
}