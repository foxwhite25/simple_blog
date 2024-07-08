import {A} from "@solidjs/router";
import Counter from "~/components/Counter";

export default function Contact() {
    return (
        <main class="text-center mx-auto text-gray-700 p-4 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Contact Page</h1>

            <p>If you have any questions, or just want to say hi, feel free to email me at <a href="mailto:vct.xie@gmail.com">vct.xie@gmail.com</a>.</p>

        </main>
    )
}