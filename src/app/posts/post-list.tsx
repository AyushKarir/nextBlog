import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostList() {

    const response = await prisma.post.findMany();

    return (
        <div>

            <main className="text-center pt-16 px-5">

                {
                    response.map((post) => (
                        <div key={post.id} className="mb-3 ">
                            <Link href={`posts/${post.id}`}>{post.title}</Link>
                        </div>
                    ))
                }
            </main>
        </div>
    )
}
