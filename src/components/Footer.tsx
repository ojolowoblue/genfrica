import { Text, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import { X, Facebook, Instagram, Send } from 'lucide-react';

const Footer = () => {
  return (
    <div
      className="w-full bg-black py-4 px-6 text-gray-400 
                 flex flex-col md:flex-row 
                 items-center
                 justify-between
                 gap-4 md:gap-6"
    >
      <Image
        src="/genfricalogo.png"
        alt="Genfrica Logo"
        width={120}
        height={16}
        className="w-auto h-4 md:h-5"
      />

      <Text className="text-gray-400 text-sm md:text-base text-center">
        &copy; Genfrica.Ai 2025. All rights reserved
      </Text>

      <Flex className="gap-4">
        <X
          size={20}
          className="cursor-pointer hover:text-white transition-colors"
        />
        <Facebook
          size={20}
          className="cursor-pointer hover:text-white transition-colors"
        />
        <Instagram
          size={20}
          className="cursor-pointer hover:text-white transition-colors"
        />
        <Send
          size={20}
          className="cursor-pointer hover:text-white transition-colors"
        />
      </Flex>
    </div>
  );
};

export default Footer;
