import { useState } from "react";

import Comment from "./components/CommentList";
import AddComment from "./components/AddComment";

import "./App.css";

function App() {
  const [commentList, setCommentList] = useState([]);

  return (
    <div className="app">
      <Comment commentList={commentList} />
      <AddComment commentList={commentList} setCommentList={setCommentList} />
    </div>
  );
}

export default App;
