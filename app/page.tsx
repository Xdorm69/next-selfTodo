// This is a server component
import { currentUser } from "@clerk/nextjs/server";
import TodoPageClient from "@/components/TodoPageClient";
export type ClerkUserPropType = {
  id: string;
  firstName: string;
  lastName: string;
  imageUrl: string | null;
  emailAddresses: {
    id: string;
    emailAddress: string;
  }[];
};

export default async function TodoPage() {
  const user = await currentUser();

  // Serialize only the necessary user information
  const serializedUser = user
    ? {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl,
        emailAddresses: user.emailAddresses.map((email) => ({
          id: email.id,
          emailAddress: email.emailAddress,
        })),
      }
    : null;

  return <TodoPageClient user={serializedUser as ClerkUserPropType} />;
}
