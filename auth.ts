"use client";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOPtions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: "ksfdf",
            clientSecret:"jsnfjdf",
        }),
    ],
} satisfies NextAuthOptions;
