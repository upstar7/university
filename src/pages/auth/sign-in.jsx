import { Link } from "react-router-dom";
import loginimg from "../../../public/img/login/loginimg.svg";
import googlebtn from "../../../public/img/login/google.svg";
import { Dashboard } from "@/layouts";
import logo from "../../../public/img/loginlogo.svg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function SignIn() {
  return (
    <div className=" flex h-full flex-row bg-white ">
      <div className=" my-10 ml-16 lg-max:hidden">
        <img src={logo} />
      </div>
      <div className=" flex flex-row items-center justify-center bg-white ">
        <div className="mt-8 flex flex-row items-center justify-center">
          <div className="w-[345px] bg-white p-5">
            <p className=" mb-2 text-[40px] font-bold text-[#280559]">Login</p>
            <p className=" mb-14 text-[16px] font-normal text-[#667085]">
              Please fill your detail to access your account.
            </p>
            <p className=" mb-2 text-[16px] font-normal text-[#344054]">
              Email
            </p>
            <Input type="email" label="Email" size="lg" />
            <p className=" mt-5 mb-2 text-[16px] font-normal text-[#344054]">
              Password
            </p>
            <Input type="password" label="Password" size="lg" />
            <div className="my-5 flex flex-row items-center justify-between">
              <Checkbox
                className=" font-normal text-[#344054]"
                label="Remember Me"
              />
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Forgot Password?
                </Typography>
              </Link>
            </div>
            <Link to="dashboard">
              <Button className="bg-[#280559] normal-case" fullWidth>
                Sign In
              </Button>
            </Link>
            <Link to="">
              <p className="p-6 text-center text-[#280559] underline text-normal">Applicant Login</p>
            </Link>
          </div>
        </div>
        <div className="ml-[100px] w-[1058px] lg-max:hidden">
          <img src={loginimg} />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
