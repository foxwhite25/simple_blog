import {Component, JSX} from "solid-js";
import {A} from "@solidjs/router";
import {Title} from "@solidjs/meta";

function formatDate(date: Date) {
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    let suffix = 'th';
    if (day === 1 || (day % 10 === 1 && day !== 11)) {
        suffix = 'st';
    } else if (day === 2 || (day % 10 === 2 && day !== 12)) {
        suffix = 'nd';
    } else if (day === 3 || (day % 10 === 3 && day !== 13)) {
        suffix = 'rd';
    }

    return monthNames[monthIndex] + ' ' + day + suffix + ', ' + year;
}

function formatDateShort(date: Date) {
    const monthNames = [
        "Jan.", "Feb.", "Mar.",
        "Apr.", "May", "Jun.",
        "Jul.", "Aug.", "Sep.",
        "Oct.", "Nov.", "Dec."
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

const BlogWrapper: Component<{
    children: JSX.Element,
    publish_time: Date,
    title: string,
    backgroundImage: string,
}> = (props) => {
    return (
        <div class="pt-32 pb-16 lg:pt-32 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <Title>{props.title}</Title>
            <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <div class="rounded-none absolute top-20 left-0 w-full h-96 z-10" style={{ "background-image": `url(${props.backgroundImage})`, "background-size": 'cover' }}></div>
                <article
                    class="rounded p-6 bg-white mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert top-20 z-20 dark:bg-gray-800 dark:border-gray-700 border border-gray-200">
                    <header class="mb-4 lg:mb-6 not-format">
                        <address class="flex items-center mb-6 not-italic">
                            <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                <img class="mr-4 w-16 h-16 rounded-full"
                                     src="https://avatars.githubusercontent.com/u/39846845?v=4" alt="Vincent Xie"/>
                                <div>
                                    <A href="/about" rel="author"
                                       class="text-xl font-bold text-gray-900 dark:text-white">Vincent Xie</A>
                                    <p class="text-base text-gray-500 dark:text-gray-400">
                                        <time datetime={props.publish_time.toISOString()}
                                              title={formatDate(props.publish_time)}>
                                            {formatDateShort(props.publish_time)}
                                        </time>
                                    </p>
                                </div>
                            </div>
                        </address>
                        <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{props.title}</h1>
                    </header>
                    {props.children}
                </article>
            </div>
        </div>
    );
};

export default BlogWrapper;