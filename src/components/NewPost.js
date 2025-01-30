function NewPost() {

    return (
        <div>
            <label>Write your review:
                <textarea name="postContent" rows={4} cols={40} />
            </label>
        </div>
    );
}

export default NewPost;