import useSWR from "swr"
import shouldFetch from 'swr'

const fetcher = url => fetch(url).then((response)=>{
    if (response.status !== 200){
        const error = new Error('An error occurred while fetching the data.')
        throw error
    }
    return response.json()
})
// const fetcher = async url => {
//     const res = await fetch(url)
//     if (!res.ok) {
//       const error = new Error('An error occurred while fetching the data.')
//       throw error
//     }
//     return res.json()
// }

export function useGithubUser(username){
    const {data, error} = useSWR(shouldFetch ? `https://api.github.com/users/${username}` : null, fetcher)
    // Differenza?
    // const {data, error} = useSWR(() => shouldFetch ? `https://api.github.com/users/${username}` : null, fetcher)
    return{
        user: data,
        loading: !error && !data,
        error,
    }
}
