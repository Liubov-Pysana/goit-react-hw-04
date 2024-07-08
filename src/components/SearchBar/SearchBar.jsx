//import React, { useState } from "react";
import * as Yup from "yup";
import styles from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

// const validationSchema = Yup.object().shape({
//     query: Yup.string().min(3, "Minimum 3 letters").required("This field is required"),
// });

export default function SearchBar({ onSubmit }) {
    return (
        <header className={styles.header}>
            <Formik
                initialValues={{ query: "" }}
                //validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    onSubmit(values.query);
                    actions.resetForm();
                    const trimmedQuery = values.query.trim();
                    if (trimmedQuery === "") {
                        toast.error("Cannot be empty");
                    } else if (trimmedQuery.length < 3) {
                        toast.error("Minimum 3 letters");
                    } else {
                        onSubmit(values.query);
                        actions.resetForm();
                    }
                }}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <Field className={styles.input} type="text" name="query" />
                        <button type="submit" className={styles.button}>
                            Search
                        </button>
                        {errors.query && touched.query ? <div className="{styles.error}>{errors.query}"></div> : null}
                    </Form>
                )}
            </Formik>
            <Toaster position="top-right" />
        </header>
    );
}
