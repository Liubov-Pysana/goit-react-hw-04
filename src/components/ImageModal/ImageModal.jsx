import Modal from "react-modal";
import styles from "./ImageModal.module.css";

export default function ImageModal({ isOpen, closeModal, imageUrl, altDescription }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className={styles.content}
            overlayClassName={styles.overlay}
            contentLabel="Image Modal"
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
        >
            <img src={imageUrl} alt={altDescription} className={styles.image} />
        </Modal>
    );
}
