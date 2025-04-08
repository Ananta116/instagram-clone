"use client";
import axios from "axios";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as yup from "yup";

const registerScheme = yup.object().shape({
  email: yup
    .string()
    .required("Please input the email")
    .email("please use the correct email"),
  password: yup.string().required("Please use the correct Password"),
  fullname: yup.string().required("Please input the fullname"),
  username: yup.string().required("Please input the username"),
});

interface IRegForm {
  email: string;
  password: string;
  fullname: string;
  username: string;
}
// interface IProps {
//   onReload: () => void;
// }

export default function RegisterForm() {
  const initialValues: IRegForm = {
    email: "",
    password: "",
    fullname: "",
    username: "",
  };
  const router = useRouter();
  const regUser = async (
    values: IRegForm,
    actions: FormikHelpers<IRegForm>
  ) => {
    try {
      await axios.post("http://localhost:8000/api/auth", values);
      actions.resetForm();
      toast.success("register success!");
      router.push("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error)
      toast.error(error.response?.data?.message || "register failed");
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerScheme}
        onSubmit={regUser}
      >
        {(props: FormikProps<IRegForm>) => {
          const { errors, touched, isSubmitting } = props;
          return (
            <Form>
              <div className="border border-slate-500/10 shadow-md max-sm:w-[300px] sm:w-[300px] md:w-[400px] max-sm:ml-0 sm:ml-0 md:ml-0">
                <div className="p-10 flex flex-col justify-center items-center gap-5">
                  <div>
                    <Image
                      src={"/images.png"}
                      alt="instagramfont"
                      width={200}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Field
                      name="email"
                      className="border border-slate-500/5 w-[300px] text-black rounded-md shadow-md h-[50px] p-5 max-sm:w-[250px] sm:w-[250px] md:w-[320px]"
                      placeholder="email"
                    />
                    {touched.email && errors.email ? (
                      <div className="text-red-500">{errors.email}</div>
                    ) : null}
                    <Field
                      name="password"
                      type="password"
                      className="border border-slate-500/5 w-[300px] text-black rounded-md shadow-md h-[50px] p-5 max-sm:w-[250px] sm:w-[250px] md:w-[320px]"
                      placeholder="password"
                    />
                    {touched.password && errors.password ? (
                      <div className="text-red-500">{errors.password}</div>
                    ) : null}
                    <Field
                      name="fullname"
                      className="border border-slate-500/5 w-[300px] text-black rounded-md shadow-md h-[50px] p-5 max-sm:w-[250px] sm:w-[250px] md:w-[320px]"
                      placeholder="fullname"
                    />
                    {touched.fullname && errors.fullname ? (
                      <div className="text-red-500">{errors.fullname}</div>
                    ) : null}
                    <Field
                      name="username"
                      className="border border-slate-500/5 w-[300px] text-black rounded-md shadow-md h-[50px] p-5 max-sm:w-[250px] sm:w-[250px] md:w-[320px]"
                      placeholder="username"
                    />
                    {touched.username && errors.username ? (
                      <div className="text-red-500">{errors.username}</div>
                    ) : null}
                    <p className="text-center text-gray-300 font-light text-[15px]">
                      People who use our service may have uploaded your contact
                      information to Instagram.
                    </p>
                    <p className="text-center text-gray-300 font-light text-[15px]">
                      By signing up, you agree to our Terms , Privacy Policy and
                      Cookies Policy .
                    </p>
                    <button
                      type="submit"
                      onSubmit={()=> router.push("/login")}
                      className="bg-sky-800 text-white w-[300px] h-[50px] rounded-md shadow-md hover:cursor-pointer hover:bg-sky-500 max-sm:w-[250px] sm:w-[250px] md:w-[320px]"
                    >
                      {isSubmitting ? "loading" : "Register"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-slate-500/10 mt-[25px] ml-[-100px] shadow-md max-sm:ml-0 sm:ml-0 md:ml-0">
                <div className="text-black flex justify-center items-center gap-3 p-3">
                  <p>Sudah punya akun?</p>
                  <p
                    onClick={() => router.push("/login")}
                    className="font-bold text-sky-700 hover:cursor-pointer"
                  >
                    Login
                  </p>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
