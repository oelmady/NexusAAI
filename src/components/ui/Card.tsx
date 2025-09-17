import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
    children,
    className = '',
    hover = false,
    padding = 'md'
}: CardProps) {
    const paddingClasses = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
    };

    const baseClasses = `bg-white rounded-lg shadow-sm border border-gray-200 ${paddingClasses[padding]}`;
    const hoverClasses = hover ? 'hover:shadow-md hover:border-gray-300 transition-all duration-200' : '';

    return (
        <div className={`${baseClasses} ${hoverClasses} ${className}`}>
            {children}
        </div>
    );
}