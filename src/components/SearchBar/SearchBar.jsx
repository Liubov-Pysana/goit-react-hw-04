import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
    return (
        <header className={styles.header}>
            <Formik
                initialValues={{ query: "" }}
                onSubmit={(values, actions) => {
                    onSubmit(values.query);
                    actions.resetForm();
                }}
            >
                <Form className={styles.form}>
                    <Field className={styles.input} type="text" name="query" />
                    <button type="submit" className={styles.button}>
                        Search
                    </button>
                </Form>
            </Formik>
            <Toaster position="top-right" />
        </header>
    );
}
