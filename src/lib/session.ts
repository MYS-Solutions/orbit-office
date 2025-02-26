import { SessionOptions } from 'iron-session';

export interface SessionData {
  username: string;
  permissions?: string[];
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET as string,
  cookieName: 'admin_session',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  },
};