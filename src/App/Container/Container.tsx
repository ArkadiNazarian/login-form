import *as yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { IFormValues, Iprops } from '../../Model/Model';

export const useContainer = () => {

    const [current_email, setEmail] = useState("");

    const [current_password, setPassword] = useState("");

    const initial_values = {
        email: "",
        password: "",
        isagreed:false
    } as IFormValues;

    const validation_schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().min(4).required(),
        isagreed: yup.boolean().isTrue()
    });

    const action_submit = (values: IFormValues) => {
        setEmail(values.email);
        setPassword(values.password);
        validation_schema.isValid(values).then((isValid) => console.log({isValid,values}));
    };

    const formik = useFormik({
        initialValues: initial_values,
        validationSchema: validation_schema,
        onSubmit: action_submit
    });

    return {
        email: current_email,
        password: current_password,
        action_submit: formik.handleSubmit,
        form_data: formik.values,
        form_errors: formik.errors,
        handleChange: formik.handleChange
    } as Iprops;
};