import { PostModel } from "@/models";

export async function getPost(id: number): Promise<PostModel> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
}
