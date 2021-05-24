import "./addComment.css";
export default function AddComment({onChange,onClick,value}) {
  return (
    <div className="commentBox">
      <img
        src="https://scontent.fskp3-1.fna.fbcdn.net/v/t1.6435-1/cp0/p86x86/90468691_10212428588028555_1649321055740755968_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=CF02iMO6k-oAX-Bt8p1&_nc_ht=scontent.fskp3-1.fna&tp=27&oh=79c89ad747ca8a0111a980cd963c3c7b&oe=60D03996"
        className="user_img"
      />
      <div className="TextBox">
        <input type="text" placeholder="Add your comment!" value={value} onChange={onChange} className="text" />
        <button onClick={onClick} className="send_btn">
          Send
        </button>
      </div>
    </div>
  );
}
