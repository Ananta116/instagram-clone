import RegisterForm from "./components/form";

// interface IProps {
//     onReload: () => void;
//   }
export default function Register() {
  return (
    <div
      role="Register"
      className="flex justify-center items-center mt-[100px]"
    >
      <RegisterForm />
    </div>
  );
}
