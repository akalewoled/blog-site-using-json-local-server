import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./blogPreview.css";
import { Link } from "react-router-dom";

const BlogList=({blog,title,handledelete}) =>{
    //const blog=props.blog;
    //const title=props.title;
    

    


    return (
        <div className="Blog-list">
            <h1>{title}</h1>
            { 
            
            blog.map(
                (blogs) =>(
                    <div className="blog-preview"  key={blogs.id}>
                        <Link to ={`/blogs/${blogs.id}`  }>
                        
                        <h1> {blogs.title}</h1>
                        <h3>written By {blogs.author}</h3>
                        <button onClick={ () => { handledelete(blogs.id) }  } > Delete</button>
                        
                        </Link>
                    </div>
                     )
                ) 


            }
        </div>

    );
}
export default BlogList;