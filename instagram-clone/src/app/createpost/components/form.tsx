import { FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";

const postCreateScheme = yup.object().shape({
  imageUrl: yup.string().required("please input the right image links"),
  caption: yup.string(),
});

interface ICreatePostForm {
  imageUrl: string;
  caption: string;
}

export default function CreatePostForm(){
    const initialValues: ICreatePostForm = {
        imageUrl: "",
        caption: ""
    }
    const router = useRouter;
    const cPost = async (
        values: ICreatePostForm,
        actions: FormikHelpers<ICreatePostForm>
    ) => {
        await axios.post("",values)
    }
        
    
}