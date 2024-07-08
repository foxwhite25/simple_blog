import BlogWrapper from "~/components/BlogWrapper";

const _title = "Lorem ipsum dolor sit amet";
const _background_image = "/blog/lorem_ipsum.webp";
const _pub_date = new Date("2024-6-10");

export const title = _title;
export const background_image = _background_image;
export const desc = "Just a placeholder example blog";
export const pub_date = _pub_date;

export default function () {
    const js = `
function fetchData(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      return response.json();
    })
    .catch(e => {
      console.log('There has been a problem with your fetch operation: ' + e.message);
    });
}

function processData(data) {
  console.log('Received data:', data);
}

fetchData('https://api.example.com/data')
  .then(data => processData(data))
  .catch(error => console.error('Error:', error));
`;
    return (
        <BlogWrapper publish_time={_pub_date} title={_title} backgroundImage={_background_image}>
            <p class="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at ex vehicula, tristique tortor nec,
                aliquet eros. Nam tempor diam sed dui aliquet tristique. Proin vel arcu nec nulla euismod commodo non
                nec justo. Nullam consequat neque nec mattis dictum. Vivamus tempus, ex in vulputate viverra, diam arcu
                sodales eros, quis aliquam nisl enim et tellus. Integer pellentesque malesuada urna, in tincidunt lacus
                vestibulum id. Sed tellus est, rhoncus vitae semper id, ullamcorper condimentum risus.
            </p>
            <p>
                Morbi neque diam, scelerisque ac ipsum id, consequat sodales est. Aliquam sit amet nulla ultricies,
                vulputate leo non, auctor mi. Vestibulum id neque sagittis, fermentum nibh nec, sollicitudin metus.
                Etiam gravida, augue sit amet tincidunt varius, neque lorem porta ante, non venenatis mauris sem non
                sem. Nam consectetur lobortis porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
                id augue eget velit pellentesque pulvinar. Phasellus bibendum efficitur posuere. Vestibulum placerat,
                odio id pharetra dapibus, neque ante blandit erat, in viverra urna arcu eget mi. Maecenas mattis quam
                urna, vel auctor urna condimentum sed. Nam ut tristique erat. Curabitur sit amet interdum nunc. Duis
                condimentum tincidunt commodo.
            </p>
            <blockquote><p>
                Integer in turpis id dui ornare commodo. Nunc et semper nunc. Nullam rutrum interdum turpis, ac egestas
                est aliquet vel. Pellentesque posuere id magna ac pellentesque. Sed semper nibh nec condimentum
                condimentum. Donec lobortis tincidunt tortor ac ultricies. Quisque sagittis, felis et euismod interdum,
                tortor mi volutpat odio, quis imperdiet lectus est a metus.
            </p></blockquote>
            <p>
                Praesent blandit dui et nulla faucibus congue. Nunc finibus nisl sed orci commodo, nec convallis orci
                convallis. Quisque fringilla hendrerit nibh non blandit. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Nunc purus velit, dictum ac fringilla a, efficitur quis velit. Cras feugiat tellus
                in diam mollis hendrerit. Vivamus sit amet ultrices ex. Nulla placerat turpis est, eget ultrices nisi
                tincidunt quis.
            </p>
            <pre>
                <code class="language-js">
                {js.trim()}
                </code>
            </pre>
        </BlogWrapper>
    )
}