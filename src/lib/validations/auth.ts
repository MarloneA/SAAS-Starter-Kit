import * as z from "zod"

export const userAuthSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

// Assuming Account, Session, and Post schemas are defined elsewhere
// Here are the dummy placeholders for those schemas for demonstration
// const AccountSchema = z.object({
//   id: z.string(),
//   userId: z.string(),
//   type: z.string(),
//   provider: z.string(),
//   providerAccountId: z.string(),
//   refresh_token: z.string().nullable(),
//   access_token: z.string().nullable(),
//   expires_at: z.number().nullable(),
//   token_type: z.string().nullable(),
//   scope: z.string().nullable(),
//   id_token: z.string().nullable(),
//   session_state: z.string().nullable(),
//   createdAt: z.date(),
//   updatedAt: z.date(),
//   user: z.any(), // This should be a reference to the UserSchema
// });

// const SessionSchema = z.object({
//   id: z.string(),
//   sessionToken: z.string(),
//   userId: z.string(),
//   expires: z.date(),
//   user: z.any(), // This should be a reference to the UserSchema
// });

// const PostSchema = z.object({
//   id: z.string(),
//   title: z.string(),
//   content: z.any().nullable(), // Use `any` for JSON type
//   published: z.boolean().default(false),
//   createdAt: z.date(),
//   updatedAt: z.date(),
//   authorId: z.string(),
//   author: z.any(), // This should be a reference to the UserSchema
// });

// const UserSchema = z.object({
//   id: z.string(),
//   name: z.string().nullable(),
//   email: z.string().email().nullable(),
//   emailVerified: z.date().nullable(),
//   image: z.string().nullable(),
//   createdAt: z.date(),
//   updatedAt: z.date(),
//   accounts: z.array(AccountSchema),
//   sessions: z.array(SessionSchema),
//   Post: z.array(PostSchema),
//   stripeCustomerId: z.string().nullable(),
//   stripeSubscriptionId: z.string().nullable(),
//   stripePriceId: z.string().nullable(),
//   stripeCurrentPeriodEnd: z.date().nullable(),
// });

// export type User = z.infer<typeof UserSchema>;
// export { UserSchema };

