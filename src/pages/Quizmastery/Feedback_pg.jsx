import React, { useState } from 'react';
import FeedbackModal from '../../components/Modals/FeedbackModal'

const Feedback_pg = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
     isModalOpen &&
    <FeedbackModal open={true} onClose={handleCloseModal}/>
    
  );
};

export default Feedback_pg;
