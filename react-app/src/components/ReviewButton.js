import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPost from './NewPost';
import '../App.css';

function ReviewButton() {
    const [showForm, setShowForm] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const handleClick = () => {
        setShowForm(!showForm);
        setShowButton(!showButton);
      };

    return (
        <div>
            {showButton && <Button onClick={handleClick} variant="primary"> Write a Review</Button>}
            {showForm && (
                <NewPost/>
            )}
         </div>
    );
}

export default ReviewButton;
