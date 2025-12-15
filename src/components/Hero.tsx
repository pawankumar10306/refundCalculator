import { Ticket, Shield, Clock } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative py-12 md:py-16 overflow-hidden hero-gradient text-primary-foreground">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/30 rounded-full" />
                <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary-foreground/20 rounded-full" />
                <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-primary-foreground/20 rounded-full" />
            </div>

            <div className="container max-w-5xl relative">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-4 animate-fade-in">
                        <Ticket className="h-3.5 w-3.5 text-secondary" />
                        <span className="text-xs font-medium text-primary-foreground">Train Refund Calculator</span>
                    </div>

                    {/* Title */}
                    <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3 animate-slide-up">
                        Train Ticket Cancellation
                        <span className="block text-secondary">Refund Calculator</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                        Based on Official IRCTC Rules
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20">
                            <Shield className="h-4 w-4 text-secondary" />
                            <span className="text-sm text-primary-foreground/90">2024 Rules</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20">
                            <Clock className="h-4 w-4 text-secondary" />
                            <span className="text-sm text-primary-foreground/90">Instant Results</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;