import { BookText } from "lucide-react";

const ExplanationSection = () => {
    return (
        <section className="py-12 bg-muted/30">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    <div className="irctc-card p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 border border-secondary/20 flex-shrink-0">
                                <BookText className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                                <h2 className="font-display text-xl font-semibold text-foreground">
                                    How IRCTC Cancellation Works
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    Understanding the refund calculation process
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Indian Railways follows specific cancellation rules depending on how early a ticket is cancelled. For confirmed tickets, a flat cancellation charge applies if cancelled more than 48 hours before departure. If cancelled between 48 and 12 hours, 25% of the fare is deducted. Between 12 and 4 hours, 50% of the fare is deducted. No refund is allowed after chart preparation in most cases.
                            </p>

                            <p>
                                For RAC and waitlisted tickets, cancellation is allowed up to 30 minutes before departure with a nominal clerkage charge. Tatkal confirmed tickets are generally non-refundable, while Tatkal RAC or waitlisted tickets follow standard refund rules.
                            </p>

                            <p>
                                This calculator provides an estimate only. Actual refund amounts may vary slightly due to bank or payment gateway charges.
                            </p>
                        </div>

                        {/* Key Points */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                                <h4 className="font-semibold text-foreground mb-2">Confirmed Tickets</h4>
                                <p className="text-sm text-muted-foreground">
                                    Subject to timing-based deductions plus class-wise base charges
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/20">
                                <h4 className="font-semibold text-foreground mb-2">RAC/Waitlist</h4>
                                <p className="text-sm text-muted-foreground">
                                    Only ₹60 clerkage deducted before chart preparation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExplanationSection;