import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: 'Individual',
    popular: PopularPlan.NO,
    price: 200,
    description:
      'For personal projects and small businesses with limited needs and budget.',
    buttonText: 'Get started',
    benefitList: [
      'Basic website setup',
      'Simple design and layout',
      'Basic SEO optimization',
      'Email support',
      'Content management',
      'Monthly updates',
    ],
  },
  {
    title: 'Small Business',
    popular: PopularPlan.YES,
    price: 500,
    description:
      'For small to medium-sized businesses looking to grow and scale.',
    buttonText: 'Get started',
    benefitList: [
      'Custom website or web application development',
      'Mobile app development for iOS and Android',
      'Responsive design for all devices',
      'Advanced SEO optimization',
      'E-commerce integration',
      'Regular updates and maintenance',
    ],
  },
  {
    title: 'Enterprise',
    popular: PopularPlan.NO,
    price: 0,
    description:
      'For large organizations with complex needs and high demands. Contact us for a custom quote.',
    buttonText: 'Contact Us',
    benefitList: [
      'Custom solutions tailored to your organization',
      'Dedicated support and maintenance',
      'Scalable architecture for growth',
      'Enterprise-grade security',
      'Data analytics and reporting',
      '24/7 priority support',
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose a Plan That Works for You
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        We offer services at affordable prices to meet your needs.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]'
                  : ''
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  {price > 0 ? (
                    <>
                      <span className="text-3xl font-bold">${price}</span>
                      <span className="text-muted-foreground"> /month</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold">Contact Us</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? 'default' : 'secondary'
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
