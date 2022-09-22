import { component$, Resource } from "@builder.io/qwik";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";

export const onGet: RequestHandler<{ two: { name: string } }> = () => {
  return { two: { name: "TWO" } };
};

export default component$(() => {
  const data = useEndpoint<{ two: { name: string } }>();
  return (
    <Resource
      value={data}
      onResolved={(value) => <p>{value.two.name}</p>}
    ></Resource>
  );
});
