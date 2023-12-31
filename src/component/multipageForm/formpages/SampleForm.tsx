import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import InputField from "../formFieldCom/InputField";

import { firstName ,email,password} from "../rules";
interface TYPEDATA {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SampleForm = () => {
  const { control, handleSubmit } = useForm({
    mode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: TYPEDATA) => {
    console.log(data);
  };
  return (
    <Box>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <InputField rule={firstName} name="firstName" label="First Name" control={control} />
        <InputField rule={firstName} name="lastName" label="last Name" control={control} />
        <InputField  rule={email} name="email" label="Email" control={control} />
        <InputField rule={password} name="password" label="Password" control={control} />
        <Button type="submit">submit</Button>
      </form>
    </Box>
  );
};

export default SampleForm;
