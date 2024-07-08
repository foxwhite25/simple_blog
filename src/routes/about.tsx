import Counter from "~/components/Counter";

export default function About() {
    return (
        <main
            class="text-center mx-auto text-gray-700 p-4 max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">About Page</h1>
            <p>Hi, I'm Fox_white, a Computer Science student at Jinan University. My interests include Rust, Vim, and
                HTMX. As a dedicated and passionate learner, I'm currently diving into the world of Machine Learning,
                Edge Computing, and Distributed Services.</p>

            <p>When I'm not coding or studying, you can find me designing planes, gaming, or working on a new
                programming project. There's nothing quite like the thrill of solving a complex problem or creating
                something new from scratch.</p>

            <h2>My Tech Stack</h2>
            <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8 content-center">
                <img src="https://img.shields.io/badge/-Rust-05122A?style=for-the-badge&logo=rust" alt="Rust"/>
                <img src="https://img.shields.io/badge/-Go-05122A?style=for-the-badge&logo=go" alt="Golang"/>
                <img src="https://img.shields.io/badge/-Python-05122A?style=for-the-badge&logo=python" alt="Python"/>
                <img src="https://img.shields.io/badge/-C-05122A?style=for-the-badge&logo=C&logoColor=A8B9CC" alt="C"/>
                <img src="https://img.shields.io/badge/-C++-05122A?style=for-the-badge&logo=C%2B%2B&logoColor=00599C"
                     alt="C++"/>
                <img src="https://img.shields.io/badge/-TypeScript-05122A?style=for-the-badge&logo=typescript"
                     alt="Typescript"/>
                <img src="https://img.shields.io/badge/-HTML-05122A?style=for-the-badge&logo=HTML5" alt="HTML"/>
                <img src="https://img.shields.io/badge/-CSS-05122A?style=for-the-badge&logo=CSS3&logoColor=1572B6"
                     alt="CSS"/>
                <img src="https://img.shields.io/badge/-Svelte-05122A?style=for-the-badge&logo=svelte" alt="Svelte"/>
                <img src="https://img.shields.io/badge/-next.js-05122A?style=for-the-badge&logo=next.js" alt="Next.js"/>
                <img src="https://img.shields.io/badge/-Leptos-05122A?style=for-the-badge&logo=Leptos" alt="Leptos"/>
                <img src="https://img.shields.io/badge/-Kubernetes-05122A?style=for-the-badge&logo=Kubernetes"
                     alt="Kubernetes"/>
                <img src="https://img.shields.io/badge/-Elasticsearch-05122A?style=for-the-badge&logo=Elasticsearch"
                     alt="Elasticsearch"/>
                <img src="https://img.shields.io/badge/-Apache%20Kafka-05122A?style=for-the-badge&logo=Apache%20Kafka"
                     alt="Apache Kafka"/>
                <img src="https://img.shields.io/badge/-Git-05122A?style=for-the-badge&logo=git" alt="Git"/>
                <img src="https://img.shields.io/badge/-GitHub-05122A?style=for-the-badge&logo=github" alt="GitHub"/>
                <img src="https://img.shields.io/badge/-Markdown-05122A?style=for-the-badge&logo=markdown"
                     alt="Markdown"/>
            </div>

            <p>Here is a nice little counter you can play with :)</p>
            <Counter/>
        </main>
    );
}
