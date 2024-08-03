import GithubIcon from '@/components/icons/github-icon';
import LinkedInIcon from '@/components/icons/linkedin-icon';
import XIcon from '@/components/icons/x-icon';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Component } from 'react';
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl:
        'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=9vCI_iMAAAAJ&citpid=8',
      firstName: 'Dr. ',
      lastName: 'Prateek Agarwal',
      positions: ['Founder', 'CEO'],
      socialNetworks: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/prateek-agrawal-ph-d-6183b28/',
        },
        {
          name: 'Github',
          url: '#',
        },
        {
          name: 'X',
          url: '#',
        },
      ],
    },
    {
      imageUrl:
        'https://media.licdn.com/dms/image/D5603AQEtYPQwTng0uA/profile-displayphoto-shrink_800_800/0/1718296534950?e=1727913600&v=beta&t=H23YVlykt7p1zTqThHjyajjDcTTqYuhTrO0KP7fg0G8',
      firstName: 'Souhardya ',
      lastName: 'Bose',
      positions: ['Tech Lead', 'Machine Learning Engineer'],
      socialNetworks: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/souhardya-bose/',
        },
        {
          name: 'X',
          url: '#',
        },
      ],
    },
    {
      imageUrl:
        'https://media.licdn.com/dms/image/C4E03AQFFSzsm0LaJvQ/profile-displayphoto-shrink_200_200/0/1638289752629?e=1727913600&v=beta&t=qOATm6E74iEXrVj-jimTgSuwKgkMVEpnfTUIdN6hp3I',
      firstName: 'Syket Das ',
      lastName: '',
      positions: ['Fullstack Developer', 'Mobile App Developer'],
      socialNetworks: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/syket-das/',
        },
        {
          name: 'X',
          url: '#',
        },
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case 'LinkedIn':
        return <LinkedInIcon />;
      case 'Github':
        return <GithubIcon />;
      case 'X':
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          The Company Dream Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <img
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && 'pb-6'
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
