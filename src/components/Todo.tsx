import Todo1 from "../assets/icons_FEtask/TodoSymbol.svg";
import add from "../assets/icons_FEtask/add.svg";
import dots from "../assets/icons_FEtask/dots.svg";
import { useEffect, useState } from "react";

const BASE_URL = "https://api.quicksell.co";

interface Ticket {
    id: string;
    title: string;
    tag: string[];
    userId: string;
    status: string;
    priority: number;
}

interface User {
    id: string;
    name: string;
    available: boolean;
}

interface TicketCardProps {
    ticket: Ticket;
    user?: User;
}

const Todo = () => {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/v1/internal/frontend-assignment`);
                const data = await response.json();
                setTickets(data.tickets);
                setUsers(data.users);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    // Helper function to find user by ID
    const getUserDetails = (userId: string): User | undefined => {
        return users.find((user) => user.id === userId);
    };

    return (
        <div>
            <div className="todo">
                <img src={Todo1} alt="icon" height={20} width={20} />
                <h1>
                    Todo <span className="num">3</span>
                </h1>
                <div className="todo_icons">
                    <img src={add} alt="icon" height={20} width={20} />
                    <img src={dots} alt="icon" height={20} width={20} />
                </div>
            </div>
            <div className="container">
                {/* Slice tickets to only display the first three */}
                {tickets.slice(0, 3).map((ticket) => {
                    const user = getUserDetails(ticket.userId);
                    return <TicketCard key={ticket.id} ticket={ticket} user={user} />;
                })}
            </div>
        </div>
    );
};

const TicketCard: React.FC<TicketCardProps> = ({ ticket, user }) => {
    return (
        <div className="card">
            <div className="card-header">
                <span className="ticket-id">{ticket.id}</span>
                {user && (
                    <img
                        src={`https://via.placeholder.com/40?text=${user.name[0]}`} // Placeholder avatar
                        alt={user.name}
                        className="avatar"
                    />
                )}
            </div>
            <h3 className="ticket-title">{ticket.title}</h3>
            <div className="ticket-tag">{ticket.tag[0]}</div>
        </div>
    );
};

export default Todo;
