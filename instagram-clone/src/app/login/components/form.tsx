"use client";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as yup from "yup";

const loginScheme = yup.object().shape({
  login: yup.string().required("Please Fill the Username"),
  password: yup.string().required("Please Fill The Password"),
});

interface ILogForm {
  login: string;
  password: string;
}
// interface IProps {
//   onReload: () => void;
// }

export default function LoginForm() {
  const initialValues: ILogForm = { login: "", password: "" };
  const router = useRouter();
  const logUser = async (values: ILogForm, actions: FormikHelpers<ILogForm>) => {
    try {
    } catch (error) {}
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginScheme}
        onSubmit={logUser}
      >
        {(props: FormikProps<ILogForm>) => {
          const { errors, touched, isSubmitting } = props;
          return (
            <Form>
              <div className="ml-[-100px] border border-slate-500/10 shadow-md max-sm:w-[300px] sm:w-[300px] md:w-[400px] max-sm:ml-0 sm:ml-0 md:ml-[-100px] md:mr-[50px]">
                <div className="p-10 flex flex-col justify-center items-center gap-5">
                  <div>
                    <Image
                      src={"/images.png"}
                      alt="instagramfont"
                      width={200}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <Field
                      name="login"
                      className="border border-slate-500/5 w-[300px] text-black rounded-md shadow-md h-[50px] p-5 max-sm:w-[250px] sm:w-[250px] md:w-[300px]"
                      placeholder="username or email"
                    />
                    {touched.login && errors.login ? (
                      <div className="text-red-500">{errors.login}</div>
                    ) : null}
                    <Field
                      name="password"
                      type="password"
                      className="border border-slate-500/5 w-[300px] text-black rounded-md shadow-md h-[50px] p-5 max-sm:w-[250px] sm:w-[250px] md:w-[300px]"
                      placeholder="password"
                    />
                    {touched.password && errors.password ? (
                      <div className="text-red-500">{errors.password}</div>
                    ) : null}
                    <button
                      type="submit"
                      className="bg-sky-800 text-white w-[300px] h-[50px] rounded-md shadow-md hover:cursor-pointer hover:bg-sky-500 max-sm:w-[250px] sm:w-[250px] md:w-[300px]"
                    >
                      {isSubmitting ? "loading" : "Log in"}
                    </button>
                    <p className="text-[15px] text-center text-gray-300">Forget Password?</p>
                  </div>
                </div>
              </div>
              <div className="border border-slate-500/10 mt-[25px] ml-[-100px] shadow-md max-sm:ml-0 sm:ml-0 md:ml-[-100px] md:mr-[50px]">
                <div className="text-black flex justify-center items-center gap-3 p-3">
                  <p>Belum punya akun?</p>
                  <p onClick={()=> router.push("/register")} className="font-bold text-sky-700 hover:cursor-pointer">Buat Akun</p>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
