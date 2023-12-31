import InputField from "../formFieldCom/InputField";
// import { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useFieldArray } from "react-hook-form";
const Form2 = ({ form }: { form: any }) => {
  // const [addingNewField, setAddingNewField] = useState(false);
  const { control } = form;
  const { fields, append } = useFieldArray({ name: "packagePricing", control });
  const addingnewFieldCLick = () => {
    append({ ageGroup: "", price: 0, rateBy: "" });
    // setAddingNewField(true);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <InputField
          name="officeName"
          control={form.control}
          label="Office Name"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <InputField
          name="PackagePricing"
          control={form.control}
          label="Package Name"
        />
        <Button onClick={addingnewFieldCLick}>Add</Button>
      </Box>
      <Box>
        {fields.map((field, index) => {
          return (
            <Box key={field.id} className="flex">
              <InputField
                name={`packagePricing${index}.price`}
                label="price"
                control={control}
              />
              <InputField
                name={`packagePricing${index}.ageGroup`}
                label="ageGroup"
                control={control}
              />
              <InputField
                name={`packagePricing${index}.rateBy`}
                label="rateBy"
                control={control}
              />
        <IconButton onClick={addingnewFieldCLick}>
          <AddCircleIcon />
        </IconButton>
            </Box>
          );
        })}

      </Box>
    </Box>
  );
};

export default Form2;
