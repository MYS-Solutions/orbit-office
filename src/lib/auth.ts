"use server";

import { sessionOptions, SessionData } from '@/lib/session';
import { getIronSession } from 'iron-session';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export const getSession = async () => {
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
    return session;
}

export const createUser = async (username: string, password: string, permissions: string[] = []) => {
    await connectDB();
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, permissions });
    await user.save();
}

export const login = async (_: any, formData: FormData) => {
    const session = await getSession();

    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    
    await connectDB();

    const user = await User.findOne({ username: username });
    if (!user) {
        return { error: 'Invalid credentials' };
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return { error: 'Invalid credentials' };
    }


    session.username = user.username;
    session.permissions = user.permissions;
    await session.save();

    redirect(`/${formData.get("locale") as string}/admin`);
}
export const logout = async () => {
    const session = await getSession();
    session.destroy();
}
export const can = async (permission: string) => {
    const session = await getSession();
    return session.permissions && session.permissions.includes(permission);
}