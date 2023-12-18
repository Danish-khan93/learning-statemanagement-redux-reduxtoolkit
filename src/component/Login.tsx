import { Box, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import {authSignUp} from "../redux/feature/authSlice"
type FORMTYPE = {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
};

const SignUp = () => {

const dispatch = useDispatch<AppDispatch>()
    const { register, handleSubmit } = useForm<FORMTYPE>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FORMTYPE) => {
    console.log(data);
    dispatch(authSignUp(data))
  };

  return (
    <Box className="flex flex-col items-center gap-10 justify-center my-10">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-10 w-[20%]"
      >
        <TextField
          label="First name"
          size="small"
          placeholder="Enter First name"
          {...register("firstName")}
        />
        <TextField
          label="Last name"
          size="small"
          placeholder="Enter Last name"
          {...register("lastName")}
        />
        <TextField
          label="Email"
          size="small"
          placeholder="Enter Email"
          {...register("email")}
        />
        <TextField
          size="small"
          label="Password"
          placeholder="Enter Password"
          {...register("password")}
        />
        <Button
          className="bg-[#B88E2F] text-[#FFF] hover:bg-[#B88E2F] "
          type="submit"
        >
          Signup
        </Button>
      </form>
      <Typography className="text-[#9F9F9F] text-[16px]">
        If You are already sign up ?{" "}
        <Link className="text-[#000] text-[16px]" to={"/login"}>
          Login
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUp;
