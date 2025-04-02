"use client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Dashboard from "@/app/dashboard/page";
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "your@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = [
          { id: "1", email: "admin@example.com", password: "m " },
          { id: "2", email: "sandi@gmail.com", password: "sandi123" },
          { id: "3", email: "naveen@gmail.com", password: "naveen123" },
        ];
        for (let i = 0; i < user.length; i++) {
          if(user[i].email === credentials?.email){
            if (
              credentials.email != user[i].email &&
              credentials.password != user[i].password
            ) {
              throw new Error("Invalid email or password");
            } else {
              return user;
            }
            
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/dasboard/page", // Redirect to Login Page
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET, // Store in .env.local
});
