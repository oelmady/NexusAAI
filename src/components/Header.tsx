import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <span className="text-2xl font-bold text-primary-600">NexusAI</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="/flowchart"
                            className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Assessment
                        </Link>
                        <Link
                            to="/guide"
                            className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Implementation Guide
                        </Link>
                        <Link
                            to="/tools"
                            className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                        >
                            AI Tools
                        </Link>
                        <Link
                            to="/blueprints"
                            className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Blueprints
                        </Link>
                        <Link
                            to="/case-studies"
                            className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Case Studies
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex">
                        <Link
                            to="/contact"
                            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-primary-600 p-2"
                        >
                            {isMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
                            <Link
                                to="/"
                                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/flowchart"
                                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Assessment
                            </Link>
                            <Link
                                to="/guide"
                                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Implementation Guide
                            </Link>
                            <Link
                                to="/tools"
                                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                AI Tools
                            </Link>
                            <Link
                                to="/blueprints"
                                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Blueprints
                            </Link>
                            <Link
                                to="/case-studies"
                                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Case Studies
                            </Link>
                            <Link
                                to="/contact"
                                className="block px-3 py-2 bg-primary-600 text-white rounded-lg font-medium text-center mt-4"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}