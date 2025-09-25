'use client';

import Image from 'next/image';
import { Search } from 'lucide-react';
import { Box, Flex, Text } from '@radix-ui/themes';
import { motion } from 'framer-motion';

import CustomInput from '@/components/CustomInput';

const Home = () => {
  return (
    <Box width="full" className="px-20 max-md:px-[30px]">
      <Flex
        direction={{ initial: 'column', md: 'row' }}
        justify="between"
        gap="8"
        align={{ initial: 'start', md: 'center' }}
        className="mb-10"
      >
        <Flex direction="column" className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Text
              className="text-[100px] max-md:text-[48px] text-white max-w-[525px] max-md:max-w-[265px]"
              weight="bold"
              style={{ lineHeight: 1 }}
            >
              Generate Quality{' '}
              <span className="bg-gradient-to-r from-yellow-500 via-green-400 to-green-500 bg-clip-text text-transparent">
                Nigerian{' '}
              </span>
              <span className="bg-gradient-to-r from-yellow-500 via-green-400 to-green-500 bg-clip-text text-transparent">
                AI Images
              </span>
            </Text>
          </motion.div>

          <Flex direction="column" gap="6" className="mt-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            >
              <Text className="block text-base text-white max-w-[485px]">
                Turn your imagination into beautiful African Images. Fast,
                simple, and ready to use with Genfrica.ai.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5, ease: 'easeOut' }}
            >
              <Box className="relative w-full max-w-sm">
                <Search
                  size={24}
                  color="white"
                  className="absolute left-2 top-2 "
                />
                <CustomInput
                  value={''}
                  placeholder="A nice looking plate of black Amala"
                  onChange={() => {}}
                  inputClassName="border-2 rounded-lg text-white p-2 px-10 w-full"
                />
              </Box>
            </motion.div>
          </Flex>
        </Flex>

        <motion.div
          className="flex-1 flex justify-end"
          animate={{ y: [0, -10, 0] }} //
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src="/amala.png"
            alt="Food image"
            width={477}
            height={573}
            className="rounded-3xl w-[477px] max-w-full md:max-w-2xl object-cover"
          />
        </motion.div>
      </Flex>
    </Box>
  );
};

export default Home;
