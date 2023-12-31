import InputField from "../formFieldCom/InputField";
import { Box } from "@mui/material";
const Form2 = ({ form }: { form: any }) => {
  return (
    <Box>
      <InputField name="address" control={form.control} label="Address" />
      <InputField name="account" control={form.control} label="Account" />

    </Box>
  );
};

export default Form2;
