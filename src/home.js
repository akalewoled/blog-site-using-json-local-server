import {useEffect, useState} from 'react';
import BlogList from './compontes/BlogList';
import useFetch from './useFetech';
const Home = () => {


    const { data: blog,ispending,error} = useFetch('http://localhost:8000/blogs');

    return(
        <div className="home">
            {error && <div>{error}</div>}
            {ispending && <div> Loading ...</div>}
          
            {


                
                 blog && <BlogList blog={blog} title='All blogs' />
            }
        </div>
    );
}
export default Home;