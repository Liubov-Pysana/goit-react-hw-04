import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
    if (!images || images.length === 0) {
        return <p>No images found.</p>;
    }

    return (
        <ul className={styles.imageGallery}>
            {images.map((image) => (
                <li key={image.id}>
                    <ImageCard image={image} onImageClick={onImageClick} />
                </li>
            ))}
        </ul>
    );
}
