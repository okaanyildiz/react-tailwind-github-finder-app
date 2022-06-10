import axios from 'axios'
import { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'

function UserResults() {

    // Api data trackers
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])

    // Fetch users from the api
    async function fetchUsers() {
        const response = await axios.get(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
        // Add .data to reach the users array
        setUsers(response.data)
        setLoading(false)
    }
    // Add a conditional rendering in case of a delay
    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {/* List the users */}
                {users.map((user) => (
                    <h3>{user.login}</h3>
                ))}
            </div>
        )
    } else {
        return (
            <Spinner />
        )
    }
}

export default UserResults