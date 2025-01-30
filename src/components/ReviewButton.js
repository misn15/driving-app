import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPost from './NewPost';
import '../App.css';

function ReviewButton() {
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm);
      };

    return (
        <div className='Review-button'>
            <Button onClick={handleClick} variant="primary"> Write a Review</Button>

            {showForm && (
                <NewPost/>
            )}
         </div>
    );
}

export default ReviewButton;
