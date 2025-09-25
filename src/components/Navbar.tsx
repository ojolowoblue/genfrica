import React from 'react';
import Image from 'next/image';

import { Box, Flex } from '@radix-ui/themes';

const Navbar = () => {
  return (
    <Box className="sticky bg-black top-0 z-50 w-full px-20 py-12 shadow-md max-md:px-[30px] max-md:py-8">
      <Flex justify="between">
        <Image src="/logo.png" alt="Genfrica Logo" width={150} height={20} />
        <button className="bg-white text-black p-1 rounded-md text-mono font-bold px-3">
          Buy AI Credit
        </button>
      </Flex>
    </Box>
  );
};

export default Navbar;
