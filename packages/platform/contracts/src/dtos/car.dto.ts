import { z } from 'zod';
import { CarSchema, CreateCarSchema, UpdateCarSchema } from '../schemas/car.schema';

export type CarDTO = z.infer<typeof CarSchema>;
export type CreateCarDTO = z.infer<typeof CreateCarSchema>;
export type UpdateCarDTO = z.infer<typeof UpdateCarSchema>;