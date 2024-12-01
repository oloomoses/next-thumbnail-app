"use client"
import { SignInButton, SignOutButton, useSession } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api"
// import { auth } from '@clerk/nextjs/server'


export default function Home() {
  const {isSignedIn} = useSession();
  const createThumbnail = useMutation(api.thumbnails.createThumbnail)
  const thumbnails = useQuery(api.thumbnails.getThumbnailsForUser)
  return (
    <main className="main">
      {isSignedIn ? <SignOutButton /> : <SignInButton/>}
      {isSignedIn && (
        <form onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement
          const formData = new FormData(e.currentTarget)
          const title = formData.get('title') as string
          await createThumbnail({
            title,
          })
          form.reset()
        }}>
          <label htmlFor="title">Title</label>
          <input name="title" className="text-black"/>
          <button>Create</button>
        </form>
      )}

      <br/>
      {thumbnails?.map((thumbnail) => {
        return <div key={thumbnail._id}>{thumbnail.title}</div>
      })}
    </main>
  );
}
