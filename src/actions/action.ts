'use server';

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function CreatePost(formData: FormData) {

    const session = await getKindeServerSession();
    if (!session) {
        redirect('/login');
    }

    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    console.log(title);
    console.log(content);

    await prisma.post.create({
        data: {
            title,
            content,
        },
    })
}

