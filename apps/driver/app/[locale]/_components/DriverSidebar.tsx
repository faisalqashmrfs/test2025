// apps/driver/app/[locale]/_components/DriverSidebar.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Car, 
  Wallet, 
  BarChart3, 
  BookOpen, 
  Award, 
  Users, 
  Sliders, 
  Settings, 
  Headphones 
} from 'lucide-react';

interface DriverSidebarProps {
  userRole: string;
  locale: string;
}

export function DriverSidebar({ locale }: DriverSidebarProps) {
  const pathname = usePathname();

  // تعريف المكونات لتجنب مشاكل توافق الأنواع مع React 19 types
  const NavLink = Link as React.ElementType;
  const SupportIcon = Headphones as React.ElementType;

  const navItems = [
    { name: 'Overview', href: `/${locale}`, icon: LayoutDashboard },
    { name: 'Trips', href: `/${locale}/trips`, icon: Car },
    { name: 'Earnings', href: `/${locale}/earnings`, icon: Wallet },
    { name: 'Performance', href: `/${locale}/performance`, icon: BarChart3 },
    { name: 'Guide', href: `/${locale}/guide`, icon: BookOpen },
    { name: 'Qualifications', href: `/${locale}/qualifications`, icon: Award },
    { name: 'My Team', href: `/${locale}/my-team`, icon: Users },
    { name: 'Preferences', href: `/${locale}/preferences`, icon: Sliders },
    { name: 'Settings', href: `/${locale}/settings`, icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#0d1b2a] text-white flex flex-col h-screen justify-between border-r border-gray-800">
      {/* القسم العلوي: الشعار والروابط */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* الشعار */}
        <div className="p-6">
          <h1 className="text-xl font-bold tracking-wider">XCARBOX</h1>
          <p className="text-xs text-gray-400 mt-1">Move Smarter, Earn Better</p>
        </div>

        <div className="px-4 mb-4">
          <hr className="border-gray-700" />
        </div>

        {/* القائمة الرئيسية */}
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => {
            const IconComponent = item.icon as React.ElementType;
            const isActive = pathname === item.href;

            return (
              <NavLink
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* القسم السفلي: الدعم وبروفايل المستخدم */}
      <div className="p-4 border-t border-gray-800 space-y-4">
        {/* زر الدعم */}
        <NavLink
          href={`/${locale}/support`}
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <SupportIcon className="w-5 h-5" />
          <span>SUPPORT</span>
        </NavLink>

        <div className="pt-2 border-t border-gray-800/60">
          {/* بطاقة المستخدم */}
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Klaus Schmidt"
                className="w-10 h-10 rounded-full object-cover border border-gray-700"
              />
            </div>
            <div className="overflow-hidden">
              <h4 className="text-sm font-semibold text-white truncate">Klaus Schmidt</h4>
              <p className="text-xs text-gray-400 truncate">KlausSchmidt@emial.com</p>
              <span className="text-[10px] font-bold text-emerald-400 tracking-wider">VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}