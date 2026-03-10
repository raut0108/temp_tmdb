import { handler } from './netlify/functions/movies.js';

(async () => {
  const response = await handler();
  console.log('response', response);
})();
