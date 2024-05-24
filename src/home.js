import BlogList from './compontes/BlogList';
import useFetch from './useFetech';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Home = () => {


    const { data: blog,ispending,error} = useFetch('http://localhost:8000/blogs');
    const history= useHistory();

    const handledelete = (id)=>{
        fetch('http://localhost:8000/blogs/'+id,{
            method: 'DELETE'
        }).then(
            ()=>{
                history.push('/');
            }
        )

    }
    return(
        <div className="home">
            {error && <div>{error}</div>}
            {ispending && <div> Loading ...</div>}
          
            {

                 blog && <BlogList blog={blog} title='All blogs' handledelete={handledelete} />
            }
        </div>
    );
}
export default Home;