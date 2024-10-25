
import { getPost } from "./getPost";

export default async function PostPage(
    props: {
        params: Promise<{ id: number }>;
    }
) {
    const params = await props.params;
    const post = await getPost(params.id);
    return (
        <main className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <h2 className="mt-4 text-2xl font-bold text-primary">
                        {post.title}
                    </h2>

                    <div className="bg-primary rounded-lg mt-2">
                        <p className="text-primary">{post.body}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
