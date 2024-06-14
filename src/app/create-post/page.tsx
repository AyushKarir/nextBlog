import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import CreatePost from "../../actions/action"
export default function page() {


    return (
        <main className="px-7 pt-24 text-center">
            <h1 className="text-5xl font-semibold mb-7">Create Post</h1>
            <form
                action={CreatePost}
                className="flex flex-col max-w-[500px] mb-20 mx-auto justify-center gap-3">
                <input
                    name="title"
                    type="text"
                    placeholder="Title for new post"
                    className="border outline-none rounded h-full px-3 py-2 border-zinc-300" />
                <textarea
                    name="content"
                    placeholder="Content for new post"
                    rows={5}
                    className="border outline-none rounded h-full px-3 py-2 border-zinc-300" />
                <button className="bg-blue-500 text-white px-3 py-2 rounded-md">submit</button>
            </form>

            <LogoutLink className="bg-red-500 text-white mt-10 px-3 py-2 rounded-md">
                Logout
            </LogoutLink>
        </main>
    )
}
