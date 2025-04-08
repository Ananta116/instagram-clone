
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "./axios";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (Credentials) => {
        const { data } = await axios.post("/auth/login", Credentials);
        if (!data) {
          throw new Error("Invalid credentials");
        }
        return {...data.data, token: data.access_token};
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  callbacks: {
    signIn: async () => {
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = user.username;
        token.fullname = user.fullname;
        token.avatar = user.avatar;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ token, session }: { token: JWT; session: Session }) {
      session.user = {
        id: token.id as number,
        email: token.email as string,
        username: token.username as string,
        fullname: token.fullname as string,
        avatar: token.avatar as string,
      };
      session.accessToken = token.accessToken as string;
      return session;
    },
    
  },
});
