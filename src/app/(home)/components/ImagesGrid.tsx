"use client";
import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/image1.jpeg",
  "/image2.jpeg",
  "/image3.jpeg",
  "/image4.jpeg",
  "/image5.jpeg",
  "/image6.jpeg",
];

const loading = false;

export default function ImagesGrid() {
  return (
    <>
      {loading ? (
        <Box className="min-h-[30vh] m-1 p-4 mt-[250px] md:mt-[320px]">
          <Flex justify="center" align="center" className="relative">
            {/* Left glow */}
            <Box className="absolute left-[5%] md:left-[27%] h-40 w-40 md:h-64 md:w-64 bg-red-500 rounded-[128px] blur-3xl opacity-60 animate-pulse-glow"></Box>

            {/* Right glow */}
            <Box className="absolute right-[5%] md:right-[32%] h-40 w-40 md:h-64 md:w-64 bg-yellow-500 rounded-[128px] blur-3xl opacity-60 animate-pulse-glow"></Box>

            {/* Bottom glow */}
            <Box className="absolute bottom-[10%] h-40 w-40 md:h-64 md:w-64 bg-blue-500 rounded-[128px] blur-3xl opacity-60 animate-pulse-glow"></Box>

            {/* Text */}
            <Text
              color="gray"
              className="absolute top-[160px] font-mono text-lg md:text-2xl animate-bounce text-center"
            >
              REFINING PROMPT...
            </Text>
          </Flex>
        </Box>
      ) : (
        images.length > 0 && (
          <Grid
            columns={{ initial: "1", md: "3" }}
            gap="8"
            justify="center"
            className="w-full"
          >
            {images.map((image, index) => (
              <motion.div
                className="overflow-hidden rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 100 }}
                key={index}
              >
                <Image
                  alt="query image"
                  src={image}
                  width={300}
                  height={100}
                  className="rounded-2xl mx-auto w-full object-cover h-92"
                />
              </motion.div>
            ))}
          </Grid>
        )
      )}
    </>
  );
}
