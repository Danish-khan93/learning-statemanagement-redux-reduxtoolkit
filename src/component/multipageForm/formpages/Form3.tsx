import InputField from "../formFieldCom/InputField";
import { Box } from "@mui/material";
const Form2 = ({ form }: { form: any }) => {
  return (
    <Box>
      <InputField name="jobTitel" control={form.control} label="jobtitle" />
      <InputField name="salary" control={form.control} label="salary" />

    </Box>
  );
};

export default Form2;
