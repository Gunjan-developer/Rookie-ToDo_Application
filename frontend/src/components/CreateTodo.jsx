import { useState } from "react"

export function CreateTodo({ onAddTodo }){

    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');
    const [loading , setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage , setSuccessMessage] = useState('');


    const handleAddTodo = async () => {
        if (!title || !description) {
            alert('Please fill in both fields!!')
            return;
        }

        setLoading(true);

        const newTodo = {
            title ,
            description,
            completed: false
        }

        
    try {
        const resp = await fetch("http://localhost:3001/todo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        });

        if(!resp.ok) {
            throw new Error('Failed to create todo')
        }

        const data = await resp.json();

        setTitle('');
        setDescription('');
        setSuccessMessage('Todo created successfully');
        setLoading(false);

        // Immediately update the parent component's todos list 
        onAddTodo(data);
    }
    catch(err) {
        setError(err.message);
        setLoading(false);
    }
    }

    

    return (
        <>
            <input type="text" id="title" placeholder="Enter title" style={{ padding: "10px", outline: "none"}} value={title} onChange={(e) => setTitle(e.target.value)} /> <br /> <br />
            <input type="text" id="desc" placeholder="Enter Description " style={{ padding: "10px", outline: "none"}} value={description} onChange={(e) => setDescription(e.target.value)} /> <br /> <br />

            <button onClick={handleAddTodo} disabled={loading}>{loading ? 'Adding...': 'Add Todo'}</button>

            {error && <p style={{ color: 'red' }}>Error: {error}</p>} {/* Show error message */}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Show success message */}
        </>
    )
}