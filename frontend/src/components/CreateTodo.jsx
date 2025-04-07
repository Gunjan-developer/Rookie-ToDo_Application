export function CreateTodo(){
    return (
        <>
            <input type="text" id="title" placeholder="Enter title" style={{ padding: "10px", outline: "none"}} /> <br /> <br />
            <input type="text" id="desc" placeholder="Enter Description " style={{ padding: "10px", outline: "none"}} /> <br /> <br />

            <button>Add Todo</button>
        </>
    )
}