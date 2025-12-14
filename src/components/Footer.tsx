import { Train, ExternalLink } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-6 border-t border-border">
            <div className="container">
                <div className="max-w-xl mx-auto text-center">
                    {/* Logo */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                            <Train className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-display text-lg font-semibold text-foreground">
                            RailRefund
                        </span>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                        This is an unofficial tool created for estimation purposes only.
                        We are not affiliated with IRCTC or Indian Railways.
                        Always verify refund amounts with official IRCTC sources.
                    </p>

                    {/* Links */}
                    <div className="flex items-center justify-center gap-6 mb-8">
                        <a
                            href="https://www.irctc.co.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            IRCTC Official
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                        <a
                            href="https://indianrailways.gov.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            Indian Railways
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-muted-foreground/60">
                        © {new Date().getFullYear()} RailRefund Calculator. Not an official IRCTC service.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
