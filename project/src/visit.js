import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./visit.css";

const ScheduleVisit = () => {
  const { id } = useParams();
  const [visitDate, setVisitDate] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSchedule = () => {
    if (visitDate) {
      setConfirmationMessage(`Your visit for property ${id} is scheduled for ${visitDate}.`);
      setIsError(false); 
    } else {
      setConfirmationMessage("Please select a date before confirming your visit.");
      setIsError(true); 
    }
  };

  return (
    <>
      <div className="schedule-visit">
        <img src="/downloadd.png" alt="Logo" className="logo" />
        <h2>Schedule a Visit for Property {id}</h2>

        <input
          type="date"
          value={visitDate}
          onChange={(e) => setVisitDate(e.target.value)}
        />

        <button onClick={handleSchedule}>Confirm Visit</button>
      </div>

     
      {confirmationMessage && (
        <div className="confirmation-message-container">
          <p className={isError ? "error-message" : "success-message"}>
            {confirmationMessage}
          </p>
        </div>
      )}
    </>
  );
};

export default ScheduleVisit;
