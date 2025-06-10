import { z } from 'zod';

export const UserSchema = z.object({
  email: z.string(),
  name: z.string(),
  surname: z.string(),
  favorites: z.array(z.string()),
});

export type User = z.infer<typeof UserSchema>;

export const LoginSchema = z.object({
  result: z.boolean(),
});

export type Login = z.infer<typeof LoginSchema>;
