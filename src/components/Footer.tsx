import { Train, ExternalLink, AlertTriangle, Users, Shield } from "lucide-react";

const Footer = () => {
    return (
        <footer id="about" className="py-12 bg-primary text-primary-foreground">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                        {/* Disclaimer */}
                        <div className="md:col-span-1">
                            <div className="flex items-center gap-2 mb-3">
                                <AlertTriangle className="h-5 w-5 text-secondary" />
                                <h3 className="font-display font-semibold">Disclaimer</h3>
                            </div>
                            <p className="text-sm text-primary-foreground/80 leading-relaxed">
                                This website is an independent informational tool and is not affiliated with IRCTC or Indian Railways. Refund amounts shown are estimates based on publicly available rules.
                            </p>
                        </div>

                        {/* About Us */}
                        <div className="md:col-span-1">
                            <div className="flex items-center gap-2 mb-3">
                                <Users className="h-5 w-5 text-secondary" />
                                <h3 className="font-display font-semibold">About Us</h3>
                            </div>
                            <p className="text-sm text-primary-foreground/80 leading-relaxed">
                                We provide simple online tools to help Indian railway passengers understand ticket cancellation rules and refund calculations.
                            </p>
                        </div>

                        {/* Privacy Policy */}
                        <div className="md:col-span-1">
                            <div className="flex items-center gap-2 mb-3">
                                <Shield className="h-5 w-5 text-secondary" />
                                <h3 className="font-display font-semibold">Privacy Policy</h3>
                            </div>
                            <ul className="text-sm text-primary-foreground/80 space-y-1">
                                <li>• No personal data stored</li>
                                <li>• Cookies used for ads (Google AdSense)</li>
                                <li>• Third-party ads may use cookies</li>
                            </ul>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-primary-foreground/20 pt-8">
                        {/* Logo and Links */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            {/* Logo */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10 border border-primary-foreground/20">
                                    <Train className="h-5 w-5 text-primary-foreground" />
                                </div>
                                <span className="font-display text-lg font-semibold">
                                    IRCTC Refund Calculator
                                </span>
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-6">
                                <a
                                    href="https://www.irctc.co.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                                >
                                    IRCTC Official
                                    <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                                <a
                                    href="https://indianrailways.gov.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                                >
                                    Indian Railways
                                    <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>

                        {/* Copyright */}
                        <p className="text-center text-xs text-primary-foreground/60 mt-8">
                            © {new Date().getFullYear()} IRCTC Refund Calculator. Not an official IRCTC service.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;