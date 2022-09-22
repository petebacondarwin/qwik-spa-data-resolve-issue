import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <p>Server-side</p>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/one">One</a>
            </li>
            <li>
              <a href="/two">Two</a>
            </li>
          </ul>
          <p>Client-side</p>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/one">One</Link>
            </li>
            <li>
              <Link href="/two">Two</Link>
            </li>
          </ul>
          <Slot />
        </section>
      </main>
    </>
  );
});
