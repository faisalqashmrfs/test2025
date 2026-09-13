import React from 'react';

export const ReceiptDiscountIcon = ({ size = 24, className = '', color = 'currentColor' }: { size?: number; className?: string; color?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Vuesax Broken Receipt Discount Path */}
    <path d="M7 2.25H17C19 2.25 20 3.25 20 5.25V20.25L17.5 18.75L15 20.25L12 18.75L9 20.25L6.5 18.75L4 20.25V7.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 12.5L13.5 7.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5 12.5H13.51" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 7.5H8.51" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);