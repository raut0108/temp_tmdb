export async function handler() {
  const key = process.env.TMDB_KEY;
  if (!key) {
    console.error("TMDB_KEY environment variable is missing");
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Server misconfigured: missing TMDB_KEY" }),
    };
  }

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
    );

    const data = await res.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(error.message);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Failed to fetch TMDB data" }),
    };
  }
}
