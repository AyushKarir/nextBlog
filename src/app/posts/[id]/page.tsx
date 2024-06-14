//"use client";
import prisma from '@/lib/db';
import { notFound, usePathname } from 'next/navigation'
import React from 'react'

export default async function Post({ params }: { params: { id: string } }) {
    // const pathname = usePathname();

    //await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })
    if (!response) {
        notFound();
    }

    //  console.log(pathname);
    //const routeid = pathname.split('/')[2];
    //console.log(title)

    return (
        <main className="px-7 pt-24 text-center">
            <h1 className="text-5xl font-semibold mb-7">{response.title}</h1>
            <p className="max-w-[700px] mx-auto">{response.content}</p>
        </main>
    )
}
