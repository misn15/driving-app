import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ReviewSuccess from './ReviewSuccess';

function SubmitButton() {
    const [showForm, setShowForm] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const handleClick = () => {
        setShowForm(!showForm);
        setShowButton(!showButton);
      };

    return (
        <div>
            {showButton && <Button onClick={handleClick} variant="primary"> Submit</Button>}
            {showForm && (
                <ReviewSuccess/>
            )}
         </div>
    );
}

export default SubmitButton;
