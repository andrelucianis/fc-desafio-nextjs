import { PostModel } from "@/models";
import { capitalizeFirstLetter } from "@/utils/capitalize";
import Link from "next/link";

export async function getPosts(): Promise<PostModel[]> {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    return response.json();
}

export async function PostsList() {
    const posts = await getPosts();
    return posts.length ? (
        posts.map((post) => (
            <Link key={post.id} href={`/post/${post.id}/`}>
                <p className="mb-5 text-gray-300 text-xl font-semibold hover:text-cyan-500">
                    {capitalizeFirstLetter(post.title)}
                </p>
            </Link>
        ))
    ) : (
        <div className="flex items-center justify-center w-full col-span-full">
            <p className="text-gray-300 text-xl font-semibold">
                No posts found.
            </p>
        </div>
    );
}
