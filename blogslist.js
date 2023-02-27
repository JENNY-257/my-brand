const ListBlogs = ()=>{
const [blogs,setBlogs] =React.useState([])
React.useEffect(()=>{
    fetch("https://iribagiza-jean.onrender.com/api/v1/blogs")
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        setBlogs(data)
        console.log(data);
    })
    
},[])
console.log(blogs);
return (
 blogs.map((el,index)=>{
    return (
    <div key={index}>
    <span>{el.title}</span>
    <center><img src={el.image}/></center>
    <h3>{el.blogSummary}</h3> 
      {/* <h4 id="but" href=`./</div>design.html?id={value._id} `>{el.title}</h4> */}
      <h4 onClick={()=>{window.location.href=`./design.html?id=${el._id}`}}>{el.title}</h4>
      </div>
      )
 })
)
}

ReactDOM.render(<ListBlogs/>, document.getElementById("blogsId"))