import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedBackData from "../data/feedbackData";

const FeedBackContext = createContext(); //just creating context and exported after

export const FeedbackProvider = ({ children }) => {
  //export
  const [feedback, setFeedback] = useState(FeedBackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const updateFeedback = (updatedItem, id) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };
  const editFeedBack = (item) => {
    setFeedbackEdit({ item, edit: true });
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedBack = (id) => {
    if (window.confirm("Are you sure you want to delete this item")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <FeedBackContext.Provider
      value={{
        feedback,
        deleteFeedBack,
        addFeedback,
        editFeedBack,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};

export default FeedBackContext;
