import { handler } from './Netlify/Functions/movies.js';

(async () => {
  const response = await handler();
  console.log('response', response);
})();
