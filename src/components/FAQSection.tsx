import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "How much refund will I get if I cancel my IRCTC ticket?",
        answer: "Refund depends on ticket class, booking status, and cancellation time. For confirmed tickets cancelled more than 48 hours before departure, only the base cancellation charge (₹60-₹240 depending on class) is deducted. Use the calculator above for an accurate estimate based on your specific ticket details."
    },
    {
        question: "Is refund allowed after chart preparation?",
        answer: "Generally no, confirmed tickets get no refund after chart preparation. However, you can file a TDR (Ticket Deposit Receipt) for special cases like train cancellation by railways, train delay of more than 3 hours, AC failure, or if you were downgraded by railways."
    },
    {
        question: "Is Tatkal ticket refundable?",
        answer: "Confirmed Tatkal tickets are completely non-refundable under any circumstances. However, if your Tatkal ticket is in RAC or waitlisted status, you can get a full refund minus the ₹60 clerkage charge by cancelling before chart preparation."
    },
    {
        question: "Are cancellation charges different for AC and Sleeper?",
        answer: "Yes, AC classes have higher flat cancellation charges compared to Sleeper and Second Class. 1A/EC class has ₹240, 2A/FC class has ₹200, 3A/CC/3E class has ₹180, Sleeper (SL) has ₹120, and Second Sitting (2S) has ₹60 as base cancellation charges."
    },
    {
        question: "What is the clerkage charge for RAC and waitlisted tickets?",
        answer: "The clerkage charge is ₹60 per passenger for RAC and waitlisted tickets cancelled before chart preparation. This is significantly lower than the cancellation charges for confirmed tickets."
    },
    {
        question: "Can I get a refund if my train is cancelled by railways?",
        answer: "Yes, if Indian Railways cancels a train, passengers are entitled to a full refund with no deductions. You can claim this refund online through IRCTC or at the railway counter."
    }
];

const FAQSection = () => {
    return (
        <section id="faqs" className="py-12 md:py-16">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                            <HelpCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-primary">FAQs</span>
                        </div>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-muted-foreground">
                            Common queries about IRCTC ticket cancellation and refunds
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <Accordion type="single" collapsible className="space-y-3">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`faq-${index}`}
                                className="irctc-card border border-border px-6 rounded-2xl"
                            >
                                <AccordionTrigger className="hover:no-underline py-5 text-left">
                                    <span className="font-display font-semibold text-foreground pr-4">
                                        {faq.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;