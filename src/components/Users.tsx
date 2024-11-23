import { useEffect, useState } from "react";

const BASE_URL = "https://api.quicksell.co";

export interface Weather {
    tickets?: TicketsEntity[] | null;
    users?: User[] | null;
}
export interface TicketsEntity {
    id: string;
    title: string;
    tag?: string[] | null;
    userId: string;
    status: string;
    priority: number;
}
export interface User {
    id: string;
    name: string;
    available: boolean;
}

const FetchData = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true); // Start loading
                const response = await fetch(`${BASE_URL}/v1/internal/frontend-assignment`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data: Weather = await response.json();
                setUsers(data.users || []);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Users</h1>
            <ul className="users">
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.available ? "Available" : "Unavailable"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchData;
