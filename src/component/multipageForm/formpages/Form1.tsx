import InputField from "../formFieldCom/InputField";
import { Box } from "@mui/material";
import {firstName,password,email} from "../rules"
const Form1 = ({ form }: { form: any }) => {
  return (
    <Box>
      <InputField rule={firstName} name="firstName" control={form.control} label="First Name" />
      <InputField rule={firstName} name="lastName" control={form.control} label="Last Name" />
      <InputField rule={email} name="email" control={form.control} label="email" />
      <InputField rule={password} name="password" control={form.control} label="Password" />
    </Box>
  );
};

export default Form1;
