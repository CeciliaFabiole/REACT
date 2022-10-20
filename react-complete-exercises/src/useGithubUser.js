import useSWR from "swr"
import shouldFetch from 'swr'

export function useGithubUser(username){
    const {data, error, mutate} = useSWR(shouldFetch ? `https://api.github.com/users/${username}` : null)

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
