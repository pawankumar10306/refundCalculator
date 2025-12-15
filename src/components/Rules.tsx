import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, IndianRupee, Clock, AlertTriangle, Train, FileText } from "lucide-react";

const Rules = () => {
    return (
        <section id="rules" className="py-12 md:py-16 bg-muted/30">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Reference Guide</span>
                        </div>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                            IRCTC Cancellation Rules
                        </h2>
                        <p className="text-muted-foreground">
                            Complete breakdown of cancellation charges and policies
                        </p>
                    </div>

                    {/* Accordion */}
                    <Accordion type="single" collapsible className="space-y-3">
                        {/* Base Charges */}
                        <AccordionItem value="base-charges" className="irctc-card border border-border px-6 rounded-2xl">
                            <AccordionTrigger className="hover:no-underline py-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                                        <IndianRupee className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="font-display font-semibold text-foreground">Base Cancellation Charges</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-5 text-muted-foreground">
                                <div className="space-y-3 pl-12">
                                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                                        <span>AC First / Executive Class</span>
                                        <span className="font-semibold text-foreground">₹240</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                                        <span>AC 2 Tier / First Class</span>
                                        <span className="font-semibold text-foreground">₹200</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                                        <span>AC 3 Tier / AC Chair Car / AC 3 Economy</span>
                                        <span className="font-semibold text-foreground">₹180</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                                        <span>Sleeper Class</span>
                                        <span className="font-semibold text-foreground">₹120</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span>Second Sitting (2S)</span>
                                        <span className="font-semibold text-foreground">₹60</span>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Timing Based */}
                        <AccordionItem value="timing" className="irctc-card border border-border px-6 rounded-2xl">
                            <AccordionTrigger className="hover:no-underline py-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                                        <Clock className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="font-display font-semibold text-foreground">Timing Based Charges</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-5 text-muted-foreground">
                                <div className="space-y-4 pl-12">
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <p className="font-medium text-foreground mb-1">More than 48 hours</p>
                                        <p className="text-sm">Flat cancellation charge per passenger</p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <p className="font-medium text-foreground mb-1">48 to 12 hours</p>
                                        <p className="text-sm">25% of fare (subject to min flat charge)</p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <p className="font-medium text-foreground mb-1">12 to 4 hours</p>
                                        <p className="text-sm">50% of fare (subject to min flat charge)</p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <p className="font-medium text-foreground mb-1">Less than 4 hours / After chart</p>
                                        <p className="text-sm">No refund for confirmed tickets</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* RAC & Waitlist */}
                        <AccordionItem value="rac-wl" className="irctc-card border border-border px-6 rounded-2xl">
                            <AccordionTrigger className="hover:no-underline py-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                                        <FileText className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="font-display font-semibold text-foreground">RAC & Waitlist Rules</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-5 text-muted-foreground">
                                <div className="space-y-4 pl-12">
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <p className="font-medium text-foreground mb-1">Before Chart & up to 30 min before departure</p>
                                        <p className="text-sm">Refund after clerkage deduction (~₹60 per passenger)</p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <p className="font-medium text-foreground mb-1">After 30 mins before departure</p>
                                        <p className="text-sm">Refund through TDR only, based on specific reason</p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <p className="font-medium text-foreground mb-1">Auto Cancellation</p>
                                        <p className="text-sm">If WL not confirmed, automatic refund with ₹60 clerkage</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Tatkal */}
                        <AccordionItem value="tatkal" className="irctc-card border border-border px-6 rounded-2xl">
                            <AccordionTrigger className="hover:no-underline py-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                                        <AlertTriangle className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="font-display font-semibold text-foreground">Tatkal Ticket Rules</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-5 text-muted-foreground">
                                <div className="space-y-4 pl-12">
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <p className="font-medium text-foreground mb-1">Confirmed Tatkal</p>
                                        <p className="text-sm">Absolutely NO refund under any circumstances</p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <p className="font-medium text-foreground mb-1">RAC / Waitlisted Tatkal</p>
                                        <p className="text-sm">Full refund minus ₹60 clerkage per passenger</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Train Cancelled */}
                        <AccordionItem value="train-cancelled" className="irctc-card border border-border px-6 rounded-2xl">
                            <AccordionTrigger className="hover:no-underline py-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                                        <Train className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="font-display font-semibold text-foreground">Train Cancelled / TDR Cases</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-5 text-muted-foreground">
                                <div className="space-y-4 pl-12">
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <p className="font-medium text-foreground mb-1">Train Cancelled by Railways</p>
                                        <p className="text-sm">Full refund with no deduction</p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <p className="font-medium text-foreground mb-1">Train Delayed &gt; 3 Hours</p>
                                        <p className="text-sm">Full refund through TDR</p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <p className="font-medium text-foreground mb-1">AC Not Working</p>
                                        <p className="text-sm">Difference amount refunded</p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <p className="font-medium text-foreground mb-1">Downgraded by Railways</p>
                                        <p className="text-sm">Fare difference refunded automatically</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Rules;
