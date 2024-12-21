import React from 'react'

const page = () => {
  return (
    <div className="mt-16">
        <h1 className="text-4xl font-bold mb-8">Create a Thumbnail Test</h1>

        <p className="text-lg max-w-md mb-8">
            Create your test so that people can vote on their favorite thumbnail
            and help you redisign or pick the best option.
        </p>

        <div className="grid grid-cols-2 gap-8">
            <div>
                <h2 className="text-2xl font-bold">Test Image A</h2>
            </div>
            <div>
                <h2 className="text-2xl font-bold">Test Image B</h2>
            </div>
        </div>
    </div>
  )
}

export default page