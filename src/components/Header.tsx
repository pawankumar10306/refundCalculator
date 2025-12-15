import { Train, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-primary text-primary-foreground">
            <div className="container max-w-6xl flex h-14 items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/10 border border-primary-foreground/20">
                        <Train className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-display text-base font-semibold text-primary-foreground">
                        Train Refund Calculator
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#calculator" className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                        Calculator
                    </a>
                    <a href="#rules" className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                        Rules
                    </a>
                    <a href="#faqs" className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                        FAQs
                    </a>
                    <a href="#about" className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                        About
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors"
                >
                    {isMenuOpen ? (
                        <X className="h-5 w-5 text-primary-foreground" />
                    ) : (
                        <Menu className="h-5 w-5 text-primary-foreground" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden border-t border-primary-foreground/20 bg-primary p-4 animate-fade-in">
                    <div className="flex flex-col gap-3">
                        <a
                            href="#calculator"
                            className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Calculator
                        </a>
                        <a
                            href="#rules"
                            className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Rules
                        </a>
                        <a
                            href="#faqs"
                            className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            FAQs
                        </a>
                        <a
                            href="#about"
                            className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;