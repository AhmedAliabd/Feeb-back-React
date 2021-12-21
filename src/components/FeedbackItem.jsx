//rfce
import {FaTimes} from 'react-icons/fa'
import Card from "../components/shared/Card"

function FeedbackItem({item}) {
    function handleClick(id){
        console.log(id)
    }
    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={()=>handleClick(item.id)} className="close">
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem
