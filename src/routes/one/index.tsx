import { component$, Resource } from "@builder.io/qwik";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";

export const onGet: RequestHandler<{ one: { name: string } }> = () => {
  return { one: { name: "ONE" } };
};

export default component$(() => {
  const data = useEndpoint<{ one: { name: string } }>();
  return (
    <Resource
      value={data}
      onResolved={(value) => <p>{value.one.name}</p>}
    ></Resource>
  );
});
