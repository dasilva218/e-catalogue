import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        // connexion

        return {
          name: 'bonjour',
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};
export default NextAuth(authOptions);
