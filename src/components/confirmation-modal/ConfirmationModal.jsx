import React, { useState } from "react";
import "./styles.css";
function ConfirmationModal() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [actionStateMessage, setActionStateMessage] = useState("");

  const handleModal = (action) => {
    if (action === "open") {
      setIsModalOpened(true);
      setActionStateMessage(""); // Clear previous message when opening
    }
    if (action === "cancel") {
      setActionStateMessage("Cancelled");
      setIsModalOpened(false);
    }
    if (action === "confirm") {
      setActionStateMessage("Confirmed");
      setIsModalOpened(false);
    }
  };

  return (
    <div className="modal-container">
      <button
        className="open-modal-btn"
        onClick={() => handleModal("open")}
        data-testid="open-modal-button"
      >
        Open Confirmation Modal
      </button>

      {isModalOpened && (
        <div className="modal-backdrop">
          <div className="modal-box" data-testid="confirmation-modal">
            <h2 className="modal-title" data-testid="modal-title">
              Confirm Action
            </h2>
            <p className="modal-message" data-testid="modal-message">
              Are you sure you want to proceed?
            </p>

            <div className="modal-buttons">
              <button
                className="confirm-btn"
                onClick={() => handleModal("confirm")}
                data-testid="confirm-button"
              >
                Confirm
              </button>
              <button
                className="cancel-btn"
                onClick={() => handleModal("cancel")}
                data-testid="cancel-button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {actionStateMessage && (
        <div className="action-status" data-testid="action-status">
          {actionStateMessage}
        </div>
      )}
    </div>
  );
}

export default ConfirmationModal;
