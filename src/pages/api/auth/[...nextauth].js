import connectMongo from '@/backend/database/dbConnect';
import USERS from '@/backend/model/user/users';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        // connexion
        connectMongo().catch((error) => {
          error: 'Connection Failed...!';
        });
        console.log(credentials);
        // check si l'utilisateur existe
        const user = await USERS.findOne({
          email: credentials.email,
        });
        // si pas d'utilisateur
        if (!user) {
          throw new Error("Pas d'utilisateur avec ce nom");
        }
        // vérifie si le mot de passe correspond
        const checkPassword = credentials.password === user.password;
        // si non
        if (!checkPassword) {
          throw new Error("Le mot de passe n'est pas le bon");
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};
export default NextAuth(authOptions);
