import { createContext, useState } from 'react'
import axios from 'axios'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export function GithubProvider({ children }) {
    // Api data trackers
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    // Fetch users from the api
    async function fetchUsers() {
        const response = await axios.get(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        // Add .data to reach the users array
        setUsers(response.data)
        setLoading(false)
    }

    return (
        <GithubContext.Provider
            value={{
                users,
                loading,
                fetchUsers
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext