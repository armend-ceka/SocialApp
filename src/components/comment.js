import "./comment.css";
export default function Comment({ comment }) {
  let date = String(comment.publishDate);
  date = date.substring(0, 10) + " " + date.substring(11, date.length - 1);

  return (
    <div className="comm_container">
      <div className="comment">
        <img src={comment.owner.picture} className="commentImg" /> &nbsp;
        <div>
          <b>{comment.owner.firstName + " " + comment.owner.lastName + " "}</b>{" "}
          {comment.message}
        </div>
      </div>
      <div className="comm_date">{new Date(date).toString().substring(0,21)}</div>
    </div>
  );
}
