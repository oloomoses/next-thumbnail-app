import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { auth } from '@clerk/nextjs/server'


export default async function Home() {
  const {userId} = await auth();
  return (
    <main className="main">
      {userId ? <SignOutButton /> : <SignInButton/>}
    </main>
  );
}
