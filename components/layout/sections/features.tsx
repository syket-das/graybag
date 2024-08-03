import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { icons } from 'lucide-react';

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: 'TabletSmartphone',
    title: 'Mobile Friendly',
    description:
      'Our solutions are optimized for mobile devices, ensuring a seamless experience for users on the go.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Social Proof',
    description:
      'We leverage social proof to build credibility and trust, showcasing positive experiences from satisfied customers.',
  },
  {
    icon: 'Goal',
    title: 'Targeted Content',
    description:
      'Our content strategies are tailored to your specific audience, delivering relevant and engaging information.',
  },
  {
    icon: 'PictureInPicture',
    title: 'Strong Visuals',
    description: `We use compelling visuals to capture attention and convey your brand's message effectively.`,
  },
  {
    icon: 'MousePointerClick',
    title: 'Clear CTA',
    description:
      'Our designs include clear and actionable calls-to-action, guiding users towards desired outcomes.',
  },
  {
    icon: 'Newspaper',
    title: 'Clear Headline',
    description:
      'We craft clear and impactful headlines to grab attention and communicate key messages instantly.',
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        At GrayBag, we distinguish ourselves with innovative features designed
        to enhance your business’s online presence and engagement.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
