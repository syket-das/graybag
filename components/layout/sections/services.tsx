import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: 'AI Integration',
    description:
      'Integrate AI into your business processes to automate repetitive tasks and improve efficiency.',
    pro: 0,
  },
  {
    title: 'Web Development',
    description:
      'Create a custom website or web application that meets your unique business needs and goals.',
    pro: 0,
  },
  {
    title: 'App Development',
    description:
      'Develop a mobile app that engages users and enhances their experience with your brand.',
    pro: 0,
  },
  {
    title: 'AI Chatbot',
    description:
      'Build an AI chatbot that can answer customer queries, provide recommendations, and improve user engagement.',
    pro: 0,
  },
  {
    title: 'Business Intelligence',
    description:
      'Leverage data analytics and business intelligence tools to gain insights into your business operations and make informed decisions.',
    pro: 1,
  },
  {
    title: 'Research & Development',
    description:
      'Invest in research and development to drive innovation, create new products, and stay ahead of the competition.',
    pro: 1,
  },
  {
    title: 'Workshop',
    description:
      'Join our workshop and learn from industry experts on the latest trends and technologies.',
    pro: 0,
  },
  {
    title: 'Hackathon',
    description:
      'Participate in our hackathon and showcase your skills by solving real-world problems.',
    pro: 0,
  },
  {
    title: 'Courses',
    description:
      'Enroll in our courses and gain new skills to advance your career and achieve your goals.',
    pro: 0,
  },
  {
    title: 'Megafest',
    description:
      'Join our megafest and connect with like-minded individuals to share ideas and collaborate on projects.',
    pro: 0,
  },
  {
    title: 'Patent',
    description:
      'Protect your intellectual property by filing for a patent to prevent others from copying your ideas.',
    pro: 0,
  },
  {
    title: 'Journal',
    description:
      'Publish your research in a reputable journal to share your findings with the scientific community.',
    pro: 0,
  },
  {
    title: 'Conference',
    description:
      'Present your research at a conference to get feedback from experts and network with other researchers.',
    pro: 0,
  },
  {
    title: 'Research Paper Assistance',
    description:
      'Need expert help with your research paper? Our premium academic writing services are here to help you.',
    pro: 0,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Grow Your Business
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From marketing and sales to operations and strategy, we have the
        expertise to help you achieve your goals.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
