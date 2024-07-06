import React from "react";
import { Oval } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <Oval
                height={50}
                width={50}
                color="#007bff"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    );
};

export default Loader;
