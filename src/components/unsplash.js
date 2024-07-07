import axios from "axios";

// const ACCESS_KEY = "Wc2fQQu_VfDgC39QNbmX0JouwDxAWt_sCt8wG7GXmZ4";

// const unsplashApi = axios.create({
//     baseURL: "https://api.unsplash.com",
//     headers: {
//         Authorization: `Client-ID ${ACCESS_KEY}`,
//     },
// });

// export const searchImages = (query, page = 1) => {
//     return unsplashApi.get("/search/photos", {
//         params: {
//             query,
//             page,
//             per_page: 10,
//         },
//     });
// };

axios.defaults.baseURL = "https://api.unsplash.com";
const API_KEY = "Wc2fQQu_VfDgC39QNbmX0JouwDxAWt_sCt8wG7GXmZ4";

export const fetchImages = async (topic, currentPage) => {
    try {
        const res = await axios.get(`search/photos`, {
            params: {
                query: topic,
                page: currentPage,
                per_page: 10,
            },
            headers: {
                Authorization: `Client-ID ${API_KEY}`,
            },
        });
        console.log(res.data);
        return res.data.results.map((image) => ({
            id: image.id,
            url: image.urls.small,
            alt_description: image.alt_description,
        }));
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
};
