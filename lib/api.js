const API_URL = process.env.API_URL;

export async function getJobs(key) {
  let url = `${API_URL}/?page=0&limit=12`;

  const res = await fetch(url);

  return res.json();
}
