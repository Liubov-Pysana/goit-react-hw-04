import React, { useState, useEffect } from "react";
// import { Toaster } from "react-hot-toast";
import styles from "./App.module.css";
// import ImageGallery from "../ImageGallery/ImageGallery";
// import ImageModal from "../ImageModal/ImageModal";
// import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
// import Loader from "../Loader/Loader";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import { searchImages } from "../../api/unsplash";

export default function App() {
    const handleSearch = (query) => {
        console.log("Searching for:", query);
    };
    return (
        <div>
            <SearchBar onSubmit={handleSearch} />
        </div>
    );
}
