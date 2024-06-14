import Link from "next/link";
import { Suspense } from "react";
import PostList from "./post-list";

export default async function Page() {

    const response = await fetch('https://dummyjson.com/posts?limit=10');
    const data = await response.json();

    return (
        <div>
            <main className="text-center pt-16 px-5">
                <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <PostList />
                </Suspense>
            </main>
        </div>
    );
}