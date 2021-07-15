import CommentListItem from "./CommentListItem";
import "./style.css"

const CommentList = ({ commentList }) => {
  return (
    <div className="comment-container">
      <h1>Comments</h1>

      {commentList.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        commentList.map((comment, index) => (
          <div className="comment-wrapper">
            <CommentListItem className="comment" key={index} comment={comment} />
            <hr/> <br/>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;
