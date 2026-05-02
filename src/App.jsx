import { useState } from 'react'
import './App.css'
import { Card } from './components/Card';

function App() {
  // User Data
  const users = [
  {
    id: 1,
    name: "John Carter",
    email: "john.carter@test.com",
    age: 28,
    role: "Frontend Developer",
    isActive: true,
    location: "Dallas, TX",
    bio: "Loves building clean UI and working with design systems."
  },
  {
    id: 2,
    name: "Sarah Lee",
    email: "sarah.lee@test.com",
    age: 32,
    role: "UX Designer",
    isActive: false,
    location: "Austin, TX",
    bio: "Focused on creating intuitive user experiences."
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@test.com",
    age: 35,
    role: "Backend Developer",
    isActive: true,
    location: "Seattle, WA",
    bio: "Enjoys designing scalable backend systems."
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@test.com",
    age: 26,
    role: "Product Manager",
    isActive: true,
    location: "Denver, CO",
    bio: "Bridges the gap between tech and business."
  }
];

  return (
    <section className='card-grid'>
      {users.map((user) =>
        <Card key={user.id} name={user.name} email={user.email} role={user.role} isActive={user.isActive} location={user.location} description={user.description} />)
      }
    </section>
  )
}

export default App
