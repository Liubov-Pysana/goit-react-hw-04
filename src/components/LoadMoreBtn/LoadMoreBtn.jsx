import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ handleLoadMore }) {
    return (
        <button className={styles.button} onClick={handleLoadMore}>
            Load more
        </button>
    );
}
