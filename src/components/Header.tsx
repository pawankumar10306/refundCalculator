import { Train, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-primary text-primary-foreground">
            <div className="container max-w-6xl flex h-14 items-center justify-between">
                {/* Logo */}
                <a href="/" rel="home" className="flex items-center gap-2 hover:opacity-90 transition-opacity" aria-label="Train Refund Calculator Home" title="Train Refund Calculator Home">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/10 border border-primary-foreground/20">
                        <Train className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <span className="font-display text-base font-semibold text-primary-foreground">
                        Train Refund Calculator
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:block" aria-label="Main navigation">
                    <ul className="flex items-center gap-8 list-none m-0 p-0">
                        <li>
                            <a href="#calculator" className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                                Calculator
                            </a>
                        </li>
                        <li>
                            <a href="#rules" className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                                Rules
                            </a>
                        </li>
                        <li>
                            <a href="#faqs" className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                                About
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMenuOpen ? (
                        <X className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                    ) : (
                        <Menu className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav
                    id="mobile-menu"
                    className="md:hidden border-t border-primary-foreground/20 bg-primary p-4 animate-fade-in"
                    aria-label="Mobile navigation"
                >
                    <ul className="flex flex-col gap-3 list-none m-0 p-0">
                        <li>
                            <a
                                href="#calculator"
                                className="block px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Calculator
                            </a>
                        </li>
                        <li>
                            <a
                                href="#rules"
                                className="block px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Rules
                            </a>
                        </li>
                        <li>
                            <a
                                href="#faqs"
                                className="block px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="block px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;