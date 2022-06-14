import {useState} from "react";
function Stats({video}) {
    const [upVotes, setUpvotes] = useState(video.upvotes);
    const [downVotes, setDownvotes] = useState(video.downvotes);

    return (
        <div name="stats">
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button name="upVote" onClick={() => setUpvotes(upVotes+1)}>{upVotes} Up</button>
            <button name="downVote" onClick={() => setDownvotes(downVotes+1)}>{downVotes} Down</button>
        </div>
    );
}

export default Stats;