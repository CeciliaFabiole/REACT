import useSWR from "swr"
import shouldFetch from 'swr'

const fetcher = url => fetch(url).then((response)=>{
    if (response.status !== 200){
        const error = new Error('An error occurred while fetching the data.')
        throw error
    }
    return response.json()
})

export function useGithubUser(username){
    const {data, error, mutate} = useSWR(shouldFetch ? `https://api.github.com/users/${username}` : null, fetcher)

    function handleRefreshUsers(){
        mutate()
    }
    return{
        user: data,
        loading: !error && !data,
        error,
        onRefresh: handleRefreshUsers
    }
}
