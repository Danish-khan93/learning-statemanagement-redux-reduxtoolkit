import { Box, Tab, Tabs } from "@mui/material";
import { Form1, Form2, Form3, Form4 } from "./formpages/index.js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomButton from "./formFieldCom/CustomButton.js";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface DATATYPE{
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  address: string,
  account: string,
  jobTitel: string,
  salary: string,
  officeName: string,
  packagePricing :{
    ageGroup:string,
    price:number,
    rateBy:string
  }[]
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MainTabs() {
  const [value, setValue] = useState(0);
  console.log(value);
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      account: "",
      jobTitel: "",
      salary: "",
      officeName: "",
      packagePricing :[]
    
    },
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

  const onNext = () => {
    if (form.formState.isValid) {
      if (value === 3) {
        setValue(3);
      } else {
        setValue((preVal) => preVal + 1);
      }
    }

    console.log(value);
  };
  const onBack = () => {
    value === 0 ? setValue(0) : setValue((preVal) => preVal - 1);
  };

  const onSubmit = (data: DATATYPE) => {
    console.log(data);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="discription" {...a11yProps(0)} />
          <Tab label="pricing" {...a11yProps(1)} />
          <Tab label="itenery" {...a11yProps(2)} />
          <Tab label="ending " {...a11yProps(3)} />
        </Tabs>
      </Box>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
        <CustomTabPanel value={value} index={0}>
          <Form1 form={form} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Form2 form={form} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Form3 form={form} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Form4 form={form} />
        </CustomTabPanel>
        <CustomButton children="back" onClick={onBack} />
        <CustomButton type="submit" children="Next" onClick={onNext} />
      </form>
    </Box>
  );
}
