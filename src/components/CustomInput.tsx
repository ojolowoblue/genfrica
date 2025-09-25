import React from "react";
import { Box } from "@radix-ui/themes";

const CustomInput = ({
  value,
  placeholder,
  onChange,
}: {
  value: string;
  placeholder: string;
  inputClassName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Box className="p-[1px] rounded-lg bg-gradient-to-br from-green-200 via-yellow-100 to-red-200 text-white ">
      <input
        className="bg-black w-full rounded-lg focus:outline-none p-3 px-10 text-white"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Box className="absolute inset-0 rounded-lg blur-sm opacity-60 bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 -z-10 animate-pulse-glow"></Box>
    </Box>
  );
};

export default CustomInput;
