import BlogWrapper from "~/components/BlogWrapper";

const _title = "Yet another blog with a longer name";
const _background_image = "/blog/img.webp";
const _pub_date = new Date("2024-6-9");

export const title = _title;
export const background_image = _background_image;
export const desc = "Just another made up blog to place hold, with a very long description, like this  this this this this this this this this this this this this this this this this this this this this this this";
export const pub_date = _pub_date;

export default function () {
    return (
        <BlogWrapper publish_time={_pub_date} title={_title} backgroundImage={_background_image}>
            <h4>Figure example</h4>
            <figure><img class="mx-auto" src="https://github-readme-stats-eight-theta.vercel.app/api?username=foxwhite25&show_icons=true&theme=algolia&include_all_commits=true&count_private=true&theme=dracula" alt=""/>
                <figcaption>My github stats</figcaption>
            </figure>

            <h4>Table example</h4>
            <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
            </p>
            <table>
                <thead>
                <tr>
                    <th>Country</th>
                    <th>Date &amp; Time</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>United States</td>
                    <td>April 21, 2021</td>
                    <td><strong>$2,300</strong></td>
                </tr>
                <tr>
                    <td>Canada</td>
                    <td>May 31, 2021</td>
                    <td><strong>$300</strong></td>
                </tr>
                <tr>
                    <td>United Kingdom</td>
                    <td>June 3, 2021</td>
                    <td><strong>$2,500</strong></td>
                </tr>
                <tr>
                    <td>Australia</td>
                    <td>June 23, 2021</td>
                    <td><strong>$3,543</strong></td>
                </tr>
                <tr>
                    <td>Germany</td>
                    <td>July 6, 2021</td>
                    <td><strong>$99</strong></td>
                </tr>
                <tr>
                    <td>France</td>
                    <td>August 23, 2021</td>
                    <td><strong>$2,540</strong></td>
                </tr>
                </tbody>
            </table>
            <h3>Typography example</h3>
            <p class="text-lg">
                This is a standard paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2 class="text-3xl font-bold">Subheading</h2>
            <p>
                This paragraph includes <strong>bold text</strong>, <em>italic text</em>, <u>underlined text</u>, <s>strikethrough text</s>, and <code>inline code</code>.
            </p>
            <blockquote class="pl-4 italic border-l-4 bg-gray-100 text-gray-600 border-gray-500">
                This is a blockquote. It's used to indicate the quotation of a large section of text from another source.
            </blockquote>
            <h3 class="text-2xl font-bold">Another Subheading</h3>
            <p>
                This paragraph includes a <a href="https://tailwindcss.com" class="text-blue-500 underline">hyperlink</a>.
            </p>
            <ul class="list-disc list-inside">
                <li>This is a bullet point in an unordered list</li>
                <li>Another bullet point</li>
            </ul>
            <ol class="list-decimal list-inside">
                <li>This is a numbered item in an ordered list</li>
                <li>Another numbered item</li>
            </ol>
        </BlogWrapper>
    )
}