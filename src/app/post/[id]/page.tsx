
import { capitalizeFirstLetter } from "@/utils/capitalize";
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
            <div className="flex-1">
                <h2 className="mb-4 text-3xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4x">
                    {capitalizeFirstLetter(post.title)}
                </h2>
                <div className="mt-2">
                    <p className="text-white">{capitalizeFirstLetter(post.body)}</p>
                </div>
            </div>
        </main>
    );
}
