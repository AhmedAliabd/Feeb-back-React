//rfce
import {FaTimes} from 'react-icons/fa'
import Card from "../components/shared/Card"

function FeedbackItem({item,deleteItem}) {
    
    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={()=>deleteItem(item.id)} className="close">
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem
