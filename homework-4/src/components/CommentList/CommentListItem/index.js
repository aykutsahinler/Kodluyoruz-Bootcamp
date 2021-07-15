import ReactStars from "react-rating-stars-component";
import "./style.css"

const CommentListItem = ({ comment }) => {
  return (
    <div>
      <li>{comment.commentValue}</li>

    <ReactStars
        value={comment.commentVote}
        edit={false}
        count={5}
        size={24}
        activeColor="#ffd700"
    />

    </div>
  );
};

export default CommentListItem;
