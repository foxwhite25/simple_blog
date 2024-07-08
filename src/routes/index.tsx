import {A, cache, createAsync} from "@solidjs/router";
import Counter from "~/components/Counter";
import {createMemo, createResource, For, JSX} from "solid-js";

type BlogMeta = {
    title: string,
    background_image: string,
    desc: string,
    default?: JSX.Element,
};

const getUsers = cache(async () => {
    "use server";
    const files = import.meta.glob('./blog/*.tsx')
    const posts = Object.keys(files).map(async (file) => {
        const slug = file.replace("./blog/", "").replace(".tsx", "")
        const meta = await files[file]()
        let val = { slug, ...((await meta) as BlogMeta)}
        delete val['default']
        return val
    })

    return Promise.all(posts)
}, "users");

export const route = {
    load: () => getUsers(),
};

export default function Home() {
    const users = createAsync(() => getUsers());

    const firstColumn = createMemo(() => (users() || []).filter((_, index) => index % 3 === 0));
    const secondColumn = createMemo(() => (users() || []).filter((_, index) => index % 3 === 1));
    const thirdColumn = createMemo(() => (users() || []).filter((_, index) => index % 3 === 2));

    return (
        <main class="text-center mx-auto text-gray-700 p-4">
            <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Home Page</h1>
            <div class="p-5 sm:p-8">
                <div class="p-5 sm:p-8 masonry-container columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                        <For each={users()}>{
                            (meta) => <div class="masonry-item max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
                                <A href={`blog/${meta.slug}`}>
                                    <img class="rounded-t-lg" src={meta.background_image} alt={meta.title} />
                                </A>
                                <div class="p-5">
                                    <A href={`blog/${meta.slug}`}>
                                        <div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{meta.title}</div>
                                    </A>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{meta.desc}</p>
                                    <A href={`blog/${meta.slug}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </A>
                                </div>
                            </div>
                        }</For>
                </div>
            </div>

        </main>
    );
}
