import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import "./style.css"

function AddComment({ commentList, setCommentList }) {

  const [newCommentValue, setNewCommentValue] = useState("");
  const [newCommentVote, setNewCommentVote] = useState(0);

  const handleVote = (vote) => {
    setNewCommentVote(vote);
  };

  function handleNewComment(event) {
    setNewCommentValue(event.target.value);
  }

  function handleCommentList() {
    if(newCommentValue === "") {
      alert("You have to comment")
    }

    else if(newCommentVote === 0) {
      alert("Please vote")
    }

    else {
      setCommentList([...commentList ,{commentValue: newCommentValue, commentVote: newCommentVote}]);
      setNewCommentValue('')
    }
  }

  return (
    <div className="container">
      <h1>Add Comment</h1> <br/>
      <textarea
        value={newCommentValue}
        onChange={handleNewComment}
        placeholder="Please enter comment"
        minLength="3"
        rows="7" cols="50"
      />
      <br/>

      <ReactStars
        count={5}
        value={newCommentVote}
        size={24}
        activeColor="#ffd700"
        onChange={handleVote}
      />
      <br/>
      <button onClick={handleCommentList}>Comment!</button>
    </div>
  );
}

export default AddComment;
