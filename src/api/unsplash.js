import axios from "axios";

const ACCESS_KEY = "Wc2fQQu_VfDgC39QNbmX0JouwDxAWt_sCt8wG7GXmZ4";

const unsplashApi = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
    },
});

export const searchImages = (query, page = 1) => {
    return unsplashApi.get("/search/photos", {
        params: {
            query,
            page,
            per_page: 10,
        },
    });
};
