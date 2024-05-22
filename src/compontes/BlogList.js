const BlogList=({blog,title}) =>{
    //const blog=props.blog;
    //const title=props.title;

    const deleteItem = ()=>{
        console.log("the button is clicked ");

    }


    return (
        <div className="Blog-list">
            <h1>{title}</h1>
          
            { 
            
            blog.map((blogs) =>(
            <div className="blog-preview"  key={blogs.id}>
            <h2> {blogs.title}</h2>
            <h3>{blogs.body}</h3>
            <h4>written By {blogs.author}</h4>
            <button onClick={ ()=> {  }  } > Delete{blogs.id}</button>

        </div>
            )
        ) 


            }
        </div>

    );
}
export default BlogList;