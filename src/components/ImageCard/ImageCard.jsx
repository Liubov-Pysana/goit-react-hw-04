import styles from "./ImageCard.module.css";

export default function ImageCard({ image, onImageClick }) {
    return (
        <div className={styles.imageCard}>
            <img
                onClick={() => onImageClick(image.url, image.alt_description || "Image")}
                src={image.url}
                alt={image.alt_description || "Image"}
            />
        </div>
    );
}
