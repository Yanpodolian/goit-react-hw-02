import "./App.css";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";
import { useState, useEffect } from "react";

function App() {
  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem("feedbackValue")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  useEffect(() => {
    localStorage.setItem("feedbackValue", JSON.stringify(feedback));
  }, [feedback]);

  const HappensCafé = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePer = Math.round((feedback.good / totalFeedback) * 100) || 0;

  const Reset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <Description />
      <Options
        HappensCafé={HappensCafé}
        totalFeedback={totalFeedback}
        Reset={Reset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positivePer}
          HappensCafé={HappensCafé}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
}

export default App;
