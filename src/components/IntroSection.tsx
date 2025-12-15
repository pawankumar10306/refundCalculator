import { Info } from "lucide-react";

const IntroSection = () => {
    return (
        <section className="py-10 bg-muted/30">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    <div className="irctc-card p-6 md:p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
                                <Info className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                                    About This Calculator
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    The IRCTC Refund Calculator helps passengers estimate how much refund they will receive when cancelling an Indian Railway train ticket. Refund amounts depend on ticket type, class of travel, and time of cancellation before the scheduled departure. This tool is designed to simplify refund calculations based on official Indian Railways cancellation rules.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-3">
                                    Passengers often find it difficult to understand refund deductions, especially for confirmed, RAC, waitlisted, or Tatkal tickets. Using this calculator, you can instantly get an approximate refund amount before cancelling your ticket on IRCTC.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;