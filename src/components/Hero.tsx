import { Ticket, Shield, Clock } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative py-10 md:py-24 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

            <div className="container relative">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
                        <Ticket className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">IRCTC Refund Calculator</span>
                    </div>

                    {/* Title */}
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-slide-up">
                        Train Ticket
                        <span className="block text-primary">Cancellation Calculator</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                        Calculate your refund instantly based on official IRCTC rules
                    </p>

                    {/* Disclaimer */}
                    <p className="text-sm text-muted-foreground/70 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        This is an unofficial tool for estimation purposes only. Always verify with IRCTC.
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border">
                            <Shield className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">Based on 2024 Rules</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">Instant Results</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
