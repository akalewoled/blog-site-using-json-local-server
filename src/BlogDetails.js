import {useParams} from 'react-router-dom';
import useFetch from './useFetech';
import {handledelete} from './home';

const BolgDetails = () => {
    const { id } = useParams(); 
    const {data: blog,ispending,error } = useFetch('http://localhost:8000/blogs/'+id);

    return (
        <div className="blog-details">
            { ispending && <div className="d">loading</div> 
             }
             {
                error && <div>{error}</div>
             }
             {blog &&
             <div>
                <h2>{blog.title}</h2>
                <p>writtenby {blog.author}</p>
                <div>{blog.body}</div>
                {//<button onClick={ () => { handledelete(blogs.id) }  } > Delete</button>
                }
            


             </div>
             }

        </div>
    );
};
export default BolgDetails;