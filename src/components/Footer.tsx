import { Text, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import { X, Linkedin, Instagram, Send, Music2 } from 'lucide-react';

const Footer = () => {
  return (
    <div
      className="w-full bg-black py-10 px-20 max-md:px-[30px] text-gray-400 
                 flex flex-col md:flex-row 
                 items-center
                 justify-between
                 gap-4 md:gap-6"
    >
      <Image
        src="/logo.png"
        alt="Genfrica Logo"
        width={120}
        height={16}
        className="w-auto h-4 md:h-5"
      />

      <Text className="text-gray-400 text-sm md:text-base text-center">
        &copy; Genfrica.Ai 2025. All rights reserved
      </Text>

      <Flex className="gap-4">
        <span className="flex justify-center items-center bg-gray-900 rounded-4xl w-[28px] h-[28px] ">
          <Image
            alt="Twitter Icon"
            src="/X.png"
            width={14}
            height={18}
            className="cursor-pointer hover:text-white transition-colors h-[13px]"
          />
        </span>
        <span className="flex justify-center items-center bg-gray-900 rounded-4xl w-[28px] h-[28px] ">
          <Image
            alt="Tiktok Icon"
            src="/tiktok.png"
            width={14}
            height={18}
            className="cursor-pointer hover:text-white transition-colors h-[15px]"
          />
        </span>
        <span className="flex justify-center items-center bg-gray-900 rounded-4xl w-[28px] h-[28px]">
          <Instagram
            size={20}
            className="cursor-pointer hover:text-white transition-colors"
          />
        </span>
        <span className="flex justify-center items-center bg-gray-900 rounded-4xl w-[28px] h-[28px]">
          <Linkedin
            size={20}
            className="cursor-pointer hover:text-white transition-colors"
          />
        </span>
      </Flex>
    </div>
  );
};

export default Footer;
