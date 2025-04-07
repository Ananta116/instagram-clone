"use client";
import axios from "axios";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as yup from "yup";

const postCreateScheme = yup.object().shape({
  imageUrl: yup.string().required("please input the right image links"),
  caption: yup.string(),
});

interface ICreatePostForm {
  imageUrl: string;
  caption: string;
}

export default function CreatePostForm() {
  const initialValues: ICreatePostForm = {
    imageUrl: "",
    caption: "",
  };
  const router = useRouter();
  const cPost = async (
    values: ICreatePostForm,
    actions: FormikHelpers<ICreatePostForm>
  ) => {
    try {
      await axios.post("http://localhost:8000/api/posts", values);
      actions.resetForm();
      toast.success("Post Created!");
      router.push("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login Failed");
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={postCreateScheme}
        onSubmit={cPost}
      >
        {(props: FormikProps<ICreatePostForm>) => {
          const { errors, touched, isSubmitting } = props;
          return (
            <Form>
              <div className="flex gap-5 flex-col">
                <h1 className="text-black">Create Post</h1>
                <Field
                  name="ImageURL"
                  className="border border-slate-500/5 w-[300px] text-black rounded-md shadow-md"
                  placeholder="Image URL"
                />
                {touched.imageUrl && errors.imageUrl ? (
                  <div className="text-red-500">{errors.imageUrl}</div>
                ) : null}
                <Field
                  name="Caption"
                  className="border border-slate-500/5 w-[300px] text-black rounded-md shadow-md"
                  placeholder="Caption"
                />
                {touched.caption && errors.caption ? (
                  <div className="text-red-500">{errors.caption}</div>
                ) : null}
                <button
                  type="submit"
                  className="bg-sky-800 text-white w-[300px] h-[50px] rounded-md shadow-md hover:cursor-pointer hover:bg-sky-500"
                >
                  {isSubmitting ? "loading" : "Post"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
