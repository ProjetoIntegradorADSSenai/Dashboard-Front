import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
       GitHubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || "",
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
    async jwt({ token, account }) {
      // Persistir o OAuth access_token no token após a autenticação inicial
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user){
       session.user.name = token.name;
       session.user.email = token.email;
      }
      return session
    },
  },
  pages: {
    signIn: "/auth/signin",
    // error: '/auth/error', // Página de erro personalizada
    // signOut: '/auth/signout',
    // verifyRequest: '/auth/verify-request',
    // newUser: '/auth/new-user'
  },
    },
);
  
  export { handler as GET, handler as POST };