import Image from "next/image";
import LoginForm from "./components/form";

// interface IProps {
//     onReload: () => void;
//   }
export default function Login() {
  return (
    <div role="Login">
      <div className="flex justify-center items-center max-sm:flex-col sm:flex-col md:flex-row">
        <Image
          src={"/log1.png"}
          alt="login1"
          width={1080}
          height={500}
          className="w-[650px] ml-[-200px] drop-shadow-md max-sm:ml-0 sm:ml-[-120px]"
        />
        <LoginForm />
      </div>
    </div>
  );
}
