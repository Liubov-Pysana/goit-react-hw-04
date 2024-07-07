import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import styles from "./App.module.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { fetchImages } from "../unsplash.js";
import toast from "react-hot-toast";

export default function App() {
    const [topic, setTopic] = useState("");
    const [images, setImages] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalImageUrl, setModalImageUrl] = useState("");
    const [modalAltDescription, setModalAltDescription] = useState("");

    const handleSearch = (newTopic) => {
        console.log("Searching for:", newTopic);
        setTopic(newTopic);
        setImages([]);
        setPage(1);
    };

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const openModal = (imageUrl, altDescription) => {
        setModalImageUrl(imageUrl);
        setModalAltDescription(altDescription);
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    useEffect(() => {
        if (topic === "") {
            return;
        }

        async function getImages() {
            try {
                setLoading(true);
                setError("");
                const data = await fetchImages(topic, page);
                console.log("data:", data);
                setImages((prevImages) => {
                    return [...prevImages, ...data];
                });
            } catch (error) {
                toast.error("Something went wrong, reload page", { position: "top-left" });
                setError();
            } finally {
                setLoading(false);
            }
        }
        getImages();
    }, [page, topic]);

    return (
        <div className={styles.container}>
            <SearchBar onSubmit={handleSearch} />
            {error ? (
                <ErrorMessage message={error} />
            ) : (
                <>
                    {images && <ImageGallery images={images} onImageClick={openModal} />}
                    {images && images.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
                </>
            )}
            <Loader loading={loading} />
            <Toaster />
            <ImageModal
                isOpen={modalIsOpen}
                closeModal={closeModal}
                imageUrl={modalImageUrl}
                altDescription={modalAltDescription}
            />
        </div>
    );
}
