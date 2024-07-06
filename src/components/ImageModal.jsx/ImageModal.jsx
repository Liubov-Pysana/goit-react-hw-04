// import React, { useEffect } from "react";
// import Modal from "react-modal";
// import styles from "./ImageModal.module.css";

// Modal.setAppElement("#root");

// const ImageModal = ({ isOpen, onRequestClose, image }) => {
//     useEffect(() => {
//         const handleKeyDown = (event) => {
//             if (event.key === "Escape") {
//                 onRequestClose();
//             }
//         };

//         document.addEventListener("keydown", handleKeyDown);
//         return () => {
//             document.removeEventListener("keydown", handleKeyDown);
//         };
//     }, [onRequestClose]);

//     return (
//         <Modal
//             isOpen={isOpen}
//             onRequestClose={onRequestClose}
//             className={styles.modalContent}
//             overlayClassName={styles.modalOverlay}
//         >
//             <div className={styles.modalBody} onClick={onRequestClose}>
//                 <img src={image.urls.regular} alt={image.alt_description} className={styles.image} />
//                 <div className={styles.modalDetails}>
//                     <h2>{image.alt_description}</h2>
//                     <p>By: {image.user.name}</p>
//                     <p>Likes: {image.likes}</p>
//                     <p>{image.description}</p>
//                 </div>
//             </div>
//         </Modal>
//     );
// };

// export default ImageModal;
