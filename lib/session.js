import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const key = new TextEncoder().encode(process.env.SESSION_SECRET);

const cookie = {
    name: 'session',
    options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/'
    },
    duration : 24 * 60 * 60 * 1000
}

export async function encrypt(payload){
    return new SignJWT(payload).setProtectedHeader({alg: 'HS256'}).
    setIssuedAt().setExpirationTime('1day').sign(key)
}

export async function decrypt(session){
    try{
        const {payload} = await jwtVerify(session, key, {algorithms: ['HS256']});
        return payload
    }catch(error){
        console.log('Failed to verify session')
    }
}

export async function createSession(userId){
    const expiresAt = new Date(Date.now() + cookie.duration);
    const session = await encrypt({userId, expiresAt});

    cookies().set(cookie.name, session, {...cookie.options, expires: expiresAt});
}

export async function verifySession(){
    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);
    if(!session?.userId){
        return null
    }

    return {userId: session.userId}
}

export async function deleteSession(){
    cookies().delete("session");
}