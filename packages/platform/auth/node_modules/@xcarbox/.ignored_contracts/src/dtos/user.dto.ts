import { z } from 'zod';
import { UserSchema, LoginSchema } from '../schemas/user.schema';

export type UserDTO = z.infer<typeof UserSchema>;
export type LoginDTO = z.infer<typeof LoginSchema>;