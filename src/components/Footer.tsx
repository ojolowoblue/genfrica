import { Text, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { name: 'X', url: '#', icon: 'x.svg' },
  {
    name: 'LinkedIn',
    url: '#',
    icon: 'linkedin.svg',
  },
  {
    name: 'Tiktok',
    url: '#',
    icon: 'tiktok.svg',
  },
  {
    name: 'Instagram',
    url: '#',
    icon: 'ig.svg',
  },
];

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
        {socialLinks.map(link => (
          <Link
            href={link.url}
            key={link.name}
            className="flex justify-center items-center rounded-full bg-[#161616] w-[40px] h-[40px]"
          >
            <Image
              src={`/icons/${link.icon}`}
              width={16}
              height={16}
              alt={link.name}
            />
          </Link>
        ))}
      </Flex>
    </div>
  );
};

export default Footer;
