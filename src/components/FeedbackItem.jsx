//rfce
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "../components/shared/Card";
import { useContext } from "react";
import FeedBackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedBack, editFeedBack } = useContext(FeedBackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedBack(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedBack(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
