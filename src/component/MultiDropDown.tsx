import { Select, MenuItem } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

type COUNTRY = {
  country_name: string;
  country_short_name: string;
  country_phone_code: number;
};

const MultiDropDown = () => {
  const [bool, setBool] = useState<boolean>(false);
  const [allCountry, setAllCountry] = useState<COUNTRY[] | []>([]);
  const [allstate, setAllstate] = useState<any>([]);
  console.log(allstate);
  
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  console.log(selectedCountry);
  console.log(selectedState);
  
  const authToken = async () => {
    try {
      const resToken = await axios.get(
        "https://www.universal-tutorial.com/api/getaccesstoken",
        {
          headers: {
            Accept: "application/json",
            "api-token":
              "If3EkrwCbYcZmNmptzI-zpighaI9uMK5VNWVm2ZUX5g8F5Q7Tik_KF_pENptkLIdE_I",
            "user-email": "danishshoukat_1994@gmail.com",
          },
        }
      );
      console.log(resToken.data.auth_token);
      localStorage.setItem(
        "authtoken",
        JSON.stringify(resToken?.data?.auth_token)
      );
      //   return resToken.data.auth_token;
    } catch (error) {
      console.log("error");
    }
  };
  //   contry api

  const countryApi = async () => {
    try {
      // @ts-ignore
      const authToken = JSON.parse(localStorage.getItem("authtoken"));
      console.log(authToken);

      const country = await axios.get(
        "https://www.universal-tutorial.com/api/countries/",
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log(country.data);
      setAllCountry(country?.data);
      //   return resToken.data.auth_token;
    } catch (error) {
      console.log("error");
    }
  };


  const stateApi = async (selectedCountry:string) => {
    try {
      // @ts-ignore
      const authToken = JSON.parse(localStorage.getItem("authtoken"));
      console.log(authToken);

      const state = await axios.get(
        `https://www.universal-tutorial.com/api/states/${selectedCountry}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log(state?.data);
      setAllstate(state?.data);
      //   return resToken.data.auth_token;
    } catch (error) {
      console.log("error");
    }
  };


  useEffect(() => {
    if (!bool) {
      authToken();
    }
    return () => {
      setBool(true);
    };
  }, []);

  useEffect(() => {
    countryApi();
  }, []);
  
  useEffect(() => {
    if(selectedCountry !== ""){

        stateApi(selectedCountry);
    }
    
  }, [selectedCountry]);


  const changeConutry = (e: any) => {
    setSelectedCountry(e.target.value);
  };
  const changeState = (e: any) => {
    setSelectedState(e.target.value);
  };

  return (
    <>
      <div>MultiDropDown</div>
      <div>
        <div>country</div>
        <Select
          value={selectedCountry}
          onChange={changeConutry}
          className="w-[200px]"
        >
          {allCountry.map((value: COUNTRY) => {
            return (
              <MenuItem
                value={value.country_name}
                key={value.country_name}
              >
                {value.country_name}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <div>
        <div>state</div>
        <Select
          value={selectedState}
          onChange={changeState}
          className="w-[200px]"
        >
          {allstate.map((value: any,index:number) => {
            return (
              <MenuItem
                value={value.state_name}
                key={index}
              >
                {value.state_name}
              </MenuItem>
            );
          })}
        </Select>
      </div>
    </>
  );
};

export default MultiDropDown;

// VogJ4xjL8746Ah-TgFzw3KJLRz5dfB0v1O8sDTv0wcC66SF5NebKHAxG6qU_qUabvqc
