import {useState, useEffect} from 'react'
import Loader from './Loader'
import Comment from './comment'
import AddComment from './addComment'
import './post.css'

export default function Post({post}) {
  const [loading,setLoading] = useState(true);
  const [comments,setComments] = useState(null);
  const [text,setText] = useState("")
  function handleChange(e){
    setText(e.target.value);
    console.log(text)
  }
  function handleClick(){
    const comment = {
      id:Math.random()*100,
      message:text,
      owner:{
        id:"2",
        title:"mr",
        firstName:"Armend",
        picture:"https://scontent.fskp3-1.fna.fbcdn.net/v/t1.6435-1/cp0/p86x86/90468691_10212428588028555_1649321055740755968_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=CF02iMO6k-oAX-Bt8p1&_nc_ht=scontent.fskp3-1.fna&tp=27&oh=79c89ad747ca8a0111a980cd963c3c7b&oe=60D03996",
        lastName:"Ceka",
      },
      publishDate: new Date(),
    }
    setComments([...comments,comment]);
    setText("");
    console.log(comments);
  }
  useEffect(() => {
    async function fetchData() {
      await fetch(`https://dummyapi.io/data/api/post/${post.id}/comment`, {
        headers: {
          "app-id": "60a7f2bc666edca6952a6311",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setComments(res.data);
          setLoading(false);
        });
    }
    fetchData();
  }, []);


    let date = String(post.publishDate);
    date = date.substring(0,10)+" "+date.substring(11,date.length-1)
  return (
    <div className="post">
      <div className="author">
        <img
          alt=""
          src={post.owner.picture}
          width="40"
          className="userImage"
        />
        <div className="name">
          <b>{post.owner.firstName + " "+ post.owner.lastName}</b>
          <br />
          {post.owner.email}
        </div>
      </div>
      <img
        alt=""
        src={post.image}
        className="postImage"
      />
      <div className="likes_date">
        <div className="likes">
          <svg
            style={{ fill: "#1877f2" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
          </svg>
          &nbsp;{post.likes} Likes
        </div>
        <div>{new Date(date).toString().substring(0,21)}</div>
      </div>
      <div className="description"><b>{post.owner.firstName}</b>&nbsp;<i>{post.text}</i></div>
      <div className="comments">
        {loading?<Loader/>:comments.map(comment=><Comment comment={comment}/>)}
        <AddComment onChange={handleChange} value={text} onClick={handleClick}/>
      </div>
    </div>
  );
}
