'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star } from 'lucide-react';

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}
const reviewList: ReviewProps[] = [
  {
    image: 'https://example.com/image1.png', // Replace with actual image URL
    name: 'Alice Johnson',
    userName: 'Marketing Specialist',
    comment:
      'GrayBag’s services have been a game-changer for our business. The AI integration by PVAI.TECH streamlined our processes and improved efficiency significantly.',
    rating: 5.0,
  },
  {
    image: 'https://example.com/image2.png', // Replace with actual image URL
    name: 'Bob Smith',
    userName: 'Event Coordinator',
    comment:
      'The events organized by TECHNOCEAN.EVENT were exceptional. The workshops and hackathons were well-organized and highly beneficial for our team.',
    rating: 4.8,
  },
  {
    image: 'https://example.com/image3.png', // Replace with actual image URL
    name: 'Charlie Brown',
    userName: 'Product Manager',
    comment:
      'CREATIVEWINGS.ORG helped us with patent services and research paper publication. Their support and expertise were invaluable for our R&D projects.',
    rating: 4.9,
  },
  {
    image: 'https://example.com/image4.png', // Replace with actual image URL
    name: 'Dana Lee',
    userName: 'Software Developer',
    comment:
      'The web and app development services from PVAI.TECH exceeded our expectations. The team delivered a high-quality product that perfectly matched our needs.',
    rating: 5.0,
  },
  {
    image: 'https://example.com/image5.png', // Replace with actual image URL
    name: 'Eve Adams',
    userName: 'Business Analyst',
    comment:
      'I was impressed by the business intelligence tools offered by PVAI.TECH. They provided us with critical insights that helped us make better decisions.',
    rating: 5.0,
  },
  {
    image: 'https://example.com/image6.png', // Replace with actual image URL
    name: 'Frank Williams',
    userName: 'Entrepreneur',
    comment:
      'TECHNOCEAN.EVENT’s megafest was an excellent opportunity to network and exchange ideas. It was well-executed and provided great value.',
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: 'start',
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
