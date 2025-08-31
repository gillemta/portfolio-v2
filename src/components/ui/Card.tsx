import React from 'react'

interface CardProps {
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg'
    className?: string;
}

export function Card({ children, size = 'md', className = '' }: CardProps) {
    return (
      <div className={`card-base card-${size} ${className}`}>
        {children}
      </div>
    );
  }