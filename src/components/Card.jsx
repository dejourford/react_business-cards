import { useState } from "react"
import "./Card.css"

export function Card({ name, email, role, isActive, location, description }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="card" onClick={() => setShowDetails(prevShowDetails => !prevShowDetails)} style={isActive ? { border: "1px solid green" } : { border: "1px solid red" }}>


            <h2>{name}</h2>
            <h3>{role}</h3>

            {showDetails && (
                <>
                    <h3>{email}</h3>
                    <h3>{location}</h3>
                    <h3>{description}</h3>
                </>
            )
            }
        </div>
    )
}