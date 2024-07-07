import ImageCard from "./ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
    if (images.length === 0) {
        return <p>No images found.</p>;
    }

    return (
        <ul className={styles.imageGallery}>
            {images.map((image) => (
                <li key={image.id}>
                    <ImageCard image={image} onClick={onImageClick} />
                </li>
            ))}
        </ul>
    );
}
