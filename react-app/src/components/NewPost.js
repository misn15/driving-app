import SubmitButton from "./SubmitButton";

function NewPost() {

    return (
        <div>
                <label>Write your review:
                    <div>
                        <textarea name="postContent" rows={5} cols={50} />
                    </div>
                </label>
            <SubmitButton/>
        </div>
    );
}

export default NewPost;