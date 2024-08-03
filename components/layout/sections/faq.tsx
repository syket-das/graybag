import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}
const FAQList: FAQProps[] = [
  {
    question: 'What services does GrayBag offer?',
    answer:
      'GrayBag is a parent company with three child companies specializing in various domains. PVAI.TECH offers AI integration, web and app development, AI chatbots, and business intelligence. TECHNOCEAN.EVENT focuses on workshops, hackathons, courses, and events. CREATIVEWINGS.ORG provides patent services, journal publication, conference presentations, and research paper assistance.',
    value: 'item-1',
  },
  {
    question: 'How can I get in touch with GrayBag?',
    answer:
      'You can contact us through the contact form on our website or directly via email at support@graybag.com. For specific inquiries related to our child companies, please visit their respective websites.',
    value: 'item-2',
  },
  {
    question: 'What is the pricing structure for GrayBag’s services?',
    answer:
      "Our pricing varies depending on the service and the specific requirements. For detailed pricing, please refer to the 'Pricing' section on our website or contact us for a custom quote tailored to your needs.",
    value: 'item-3',
  },
  {
    question: 'Can I integrate multiple services from GrayBag?',
    answer:
      'Yes, you can integrate multiple services across our child companies. For example, you can combine AI integration from PVAI.TECH with event management from TECHNOCEAN.EVENT. Please contact us to discuss your specific needs and create a custom solution.',
    value: 'item-4',
  },
  {
    question: 'Are there any ongoing promotions or discounts?',
    answer:
      'We occasionally offer promotions and discounts on our services. Please check our website or subscribe to our newsletter for the latest updates on special offers.',
    value: 'item-5',
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
