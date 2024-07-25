import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { decrypt } from "./lib/session";


const protectedRoutes = ["/shareMeal", "/profile"];

export default async function middleware(req){
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);

    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);

    if(isProtectedRoute && !session?.userId){
        return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    return NextResponse.next();
}