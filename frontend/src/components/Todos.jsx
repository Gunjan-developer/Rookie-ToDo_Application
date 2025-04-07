// here we are using the object destructuring and todos will be an array
export function Todos( {todos}) {
    return (
        <>
            {todos.map((todo , index) => (

                <div key={index}>
                    <h1>{todo.title}</h1>
                    <h3>{todo.description}</h3>
                    <button>{(todo.completed == true) ? "Complete": "Mark as Complete"}</button>
                </div>
        ))}
        </>
    )
}