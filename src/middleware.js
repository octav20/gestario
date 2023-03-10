import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
    const jwt = request.cookies.get("token");
    if (!jwt) return NextResponse.redirect(new URL("/", request.url));
    // this condition avoid to show the login page if the user is logged in F
    // if (jwt) {
    //     console.log(request.nextUrl.pathname);
    //     if (request.nextUrl.pathname === "/") {
    //         try {
    //             await jwtVerify(jwt.value, new TextEncoder().encode("secret"));

    //             return NextResponse.redirect(new URL("/menu", request.url));
    //         } catch (error) {
    //             return NextResponse.next();
    //         }
    //     }
    // }

    try {
        const { payload } = await jwtVerify(
            jwt.value,
            new TextEncoder().encode("secret")
        );
        // console.log({ payload });
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL("/", request.url));
    }
}

export const config = {
    matcher: ["/entradas/:path*", "/inventario", "/productos/:path*", "/proveedores/:path*", "/salidas/:path*", "/menu",],

};