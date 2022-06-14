function Comment({comment}) {
    return (
        <div name="comment">
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
        </div>
    )
}

export default Comment;