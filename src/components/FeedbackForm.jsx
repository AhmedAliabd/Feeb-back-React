import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Card from "../components/shared/Card";
import Button from "./shared/Button";
function FeedbackForm({handleAdd}) {
    const [text, setText] = useState("");
    const [btnDisabled, setbtnDisabled] = useState(true);
    const [rating, setRating] = useState(10);
    const [message, setMessage] = useState(null);
    const handleTextChange = (e)=>{
        if(text === "")
        {
            setbtnDisabled(true);
            setMessage(null);
        }else if(text !== '' && text.trim().length <= 10){
            setbtnDisabled(true);
            setMessage("Text must be at least 10 characters");
        }else{
            setMessage(null);
            setbtnDisabled(false);
        }
        setText(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(text.trim().length >10){
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback);
            setText('');
        }
    }
    return (
                    <Card>
                        <form onSubmit={handleSubmit}>
                            <h2>How would you rate our service with us</h2>
                            <RatingSelect select = {(rating)=> setRating(rating)}/>
                            <div className="input-group">
                                <input onChange={handleTextChange} type="text" placeholder="Write review" value={text} />
                                <Button type="submit" version={"secondary"} isDisabled={false}>Send</Button>
                            </div>
                            {message && <div className="message">{message}</div>}
                        </form>
            </Card>
        
    )
}

export default FeedbackForm
