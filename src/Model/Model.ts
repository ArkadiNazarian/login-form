import { FormikErrors } from 'formik';

export interface Iprops{
    email:string,
    password:string,
    action_submit:()=>void,
    form_data:IFormValues,
    form_errors:FormikErrors<IFormValues>,
    handleChange:()=>void
}
export interface IFormValues{
    email:string,
    password:string,
    isagreed:boolean
}