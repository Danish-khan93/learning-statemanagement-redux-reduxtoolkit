import { Box, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

interface INPUTFIELDTYPE {
  name: string;
  control: any;
  label: string;
  rule?:any
}

const InputField: React.FC<INPUTFIELDTYPE> = ({
  name,
  control,
  label,
  rule,
}) => {
  return (
    <Box>
      <Controller
        name={name}
        control={control}
        rules={rule}
        // @ts-ignore
        render={({ field, fieldState, formState }) => (
          <Box>
            <Typography>{label}</Typography>
            <TextField
              {...field}
              error={!fieldState.error}
              // helperText={formState?.errors && rule?.minLength?.message || rule?.required?.message}
              // helperText={
              //   fieldState?.invalid
              //     ? fieldState?.error?.type === "minLength"
              //       ? rule?.minLength?.message
              //       : rule?.required?.message
              //     : ""
              // }
              helperText={
                rule && fieldState?.invalid
                  ? Object.keys(rule)
                      .map((key) => {
                        if (fieldState?.error?.type === key) {
                          // @ts-ignore
                          return rule[key]?.message;
                        }
                        return "";
                      })
                      .join("")
                  : ""
              }
            />
          </Box>
        )}
      ></Controller>
    </Box>
  );
};

export default InputField;
