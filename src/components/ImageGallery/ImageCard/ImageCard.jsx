import styles from "./ImageCard.module.css";

// export default function ImageCard({ image, onClick }) {
//     return (
//         <div className={styles.imageCard} onClick={onClick}>
//             <img src={image.urls.small} alt={image.alt_description} />
//         </div>
//     );
// }
export default function ImageCard({ image, onImageClick }) {
    return (
        <div>
            <img
                onClick={() => onImageClick(image.url, image.alt_description || "Image")}
                src={image.url}
                alt={image.alt_description || "Image"}
            />
        </div>
    );
}
