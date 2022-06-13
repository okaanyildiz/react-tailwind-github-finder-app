import { useContext, useEffect } from 'react'
import GithubContext from '../components/context/github/GithubContext'

function User({ match }) {
    const { getUser, user } = useContext(GithubContext)

    useEffect(() => {
        getUser(match.params.login)
    }, [])

    return <div>{user.login}</div>
}

export default User