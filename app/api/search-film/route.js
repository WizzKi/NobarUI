export async function GET(req){

const { searchParams } = new URL(req.url)
const query = searchParams.get("q")

const res = await fetch(
`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_KEY}&query=${query}`
)

const data = await res.json()

return Response.json(data.results)

}