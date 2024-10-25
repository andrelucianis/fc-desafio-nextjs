import { PostsList } from "@/components/PostsList";
import PostTitleSkeleton from "@/components/PostTitleSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl">Blog Posts</h1>
      <div className="flex-1 w-full">
        <Suspense
          fallback={new Array(15).fill(null).map((_, index) => (
            <PostTitleSkeleton key={index} />
          ))}
        >
          <PostsList />
        </Suspense>
      </div>
    </main>
  );
}
