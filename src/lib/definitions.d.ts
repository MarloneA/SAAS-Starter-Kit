export type User = {
  id: string;
  name?: string;
  email?: string;
  emailVerified?: Date;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  accounts: Account[];
  sessions: Session[];
  Post: Post[];
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  stripePriceId?: string;
  stripeCurrentPeriodEnd?: Date;
};

export type Account = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
};

export type Session = {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user: User;
};

export type VerificationToken = {
  identifier: string;
  token: string;
  expires: Date;
};

export type Post = {
  id: string;
  title: string;
  content?: any;  // Use `any` for JSON type, or you can define a specific type if you know the structure
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  author: User;
};
