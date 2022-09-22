# Client-side + endpoint data issue

Steps to reproduce:

- Install and start:
  ```sh
  npm i
  npm run dev
  ```
- Navigate to the website: http://127.0.0.1:5173/.
- Click on server-side links and see that the endpoint data is rendered as expected.
- Click on the client-side links and see that there is an error when the old route's component `onResolve` render function is called with the new route's endpoint data.
