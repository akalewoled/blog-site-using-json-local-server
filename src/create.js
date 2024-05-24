import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create =() => {
    
    const history = useHistory();
    const [title,setTitle]=useState('');
    
    const [body,setBody]=useState('');
    const [ispending,setisPending] =useState(false)
    
    const [author,setAuthor]=useState('');
    const handlePost =(e)=>{
        e.preventDefault();
        const Blog={title,body,author};
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers:{"Content-Type":"applicaiton/json"},
            body:JSON.stringify(Blog)
            
        }).then(()=>{
            console.log("submitted sucessfuly");
            setisPending(true);
            history.push('/');

        })

    }

    return (
        <div className="create">
            <h2>add new blog</h2>
            <form onSubmit={handlePost}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                
                <label>blog body </label>
                <textarea required value ={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>
                <label>Blog author</label>
                <input value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
                    
                </input>
                {!ispending && <button>Add Bolg</button>}
                {ispending && <button disabled> loading</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>

    );
}
export default Create;
