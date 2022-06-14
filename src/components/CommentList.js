import react, { useState } from "react";
import Comment from "./Comment";
import {v4 as uuidv4} from "uuid";

function CommentList({comments}) {
    const [listIsVisible, setListIsVisible] = useState(true);
    

    return (
        <div name="commentList">
            <button onClick={handleCommentToggle}>{getButtonListCaption()}</button>
            {listIsVisible? 
                <div name="list">
                    <h2>{comments.length} Comments</h2>
                    {comments.map(comment => <Comment key={uuidv4()} comment={comment}/>)}
                </div> : null
            }
        </div>
    )

    function getButtonListCaption() {
        return listIsVisible? "HideComments" : "ShowComments";
    }

    function handleCommentToggle() {
        setListIsVisible(!listIsVisible);
    }
}

export default CommentList;