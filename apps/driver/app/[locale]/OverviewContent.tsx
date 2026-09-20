// apps/driver/components/OverviewContent.tsx

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Car, 
  Search, 
  Sliders, 
  FileText 
} from 'lucide-react';

interface OverviewContentProps {
  locale: string;
}

export default function OverviewContent({ locale }: OverviewContentProps) {
  return (
    <div className="space-y-6 pb-10">
      
      {/* 1. شريط المهمة النشطة العلوي (Active Job Banner) */}
      <div className="bg-[#111827] text-white px-6 py-3.5 rounded-xl flex flex-wrap items-center justify-between gap-4 shadow-md border border-gray-800">
        <div className="flex items-center gap-3 text-sm">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-gray-200">To Start</span>
          <span className="text-gray-400">In 2days, 30min</span>
          <span className="text-gray-600">|</span>
          <span className="font-medium text-white">Berlin &rarr; Munich</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400">Vehicle: <strong className="text-white">Porsche 911 GT3</strong></span>
        </div>
        <Link
          href={`/${locale}/trips`}
          className="bg-white text-gray-950 hover:bg-gray-100 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1.5 shadow"
        >
          <span>Continue Job</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 2. ترحيب السائق والوقت */}
      <div>
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-1">
          <span>Oct 26, 2023, 08:20AM</span>
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
            <CheckCircle2 className="w-3 h-3" />
            VERIFIED
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Guten Morgen, Klaus Schmidt
        </h1>
      </div>

      {/* 3. بطاقات الإحصائيات الأربعة (General Metrics) */}
      <div>
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">General Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Trips Card */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between relative group hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between text-gray-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">TRIPS</span>
                <Link href={`/${locale}/trips`} className="text-gray-400 hover:text-gray-600">
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
              <div className="text-3xl font-extrabold text-gray-900">142</div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs">
                <span className="text-emerald-600 font-semibold">+5% vs last month</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                <span>Distance:</span>
                <span className="font-medium text-gray-800">12,450 km</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                <span>AVG / Trip:</span>
                <span className="font-medium text-gray-800">87 km</span>
              </div>
            </div>
          </div>

          {/* Pending Wallet Card */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between relative group hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between text-gray-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Pending WALLET</span>
                <Link href={`/${locale}/earnings`} className="text-gray-400 hover:text-gray-600">
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
              <div className="text-3xl font-extrabold text-gray-900">&euro;3,540.00</div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs">
                <span className="text-emerald-600 font-semibold">+&euro;820.00 since last payout</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                <span>Pending:</span>
                <span className="font-medium text-gray-800">&euro;1,260.00</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                <span>Next payout:</span>
                <span className="font-medium text-gray-800">Nov, 12</span>
              </div>
            </div>
          </div>

          {/* Performance Card */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between relative group hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between text-gray-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">PERFORMANCE</span>
                <Link href={`/${locale}/performance`} className="text-gray-400 hover:text-gray-600">
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
              <div className="text-3xl font-extrabold text-gray-900">94.6%</div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs">
                <span className="text-emerald-600 font-semibold">1.2% vs last month</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                <span>Cancellation rate:</span>
                <span className="font-medium text-gray-800">3.2%</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                <span>Response rate:</span>
                <span className="font-medium text-gray-800">96.8%</span>
              </div>
            </div>
          </div>

          {/* Account Status Card */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between relative group hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between text-gray-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Account</span>
                <Link href={`/${locale}/qualifications`} className="text-gray-400 hover:text-gray-600">
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
              <div className="text-2xl font-extrabold text-gray-900 mt-1">Verified</div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Driving License</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Identity Document</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Bank Account</span>
                <AlertCircle className="w-4 h-4 text-rose-500" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. قسم الرسم البياني للأرباح (Earnings Chart) */}
      <div>
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Earnings Chart:</h3>
        <div className="bg-[#0b1329] text-white p-6 rounded-2xl border border-gray-800 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">WEEKLY EARNINGS</span>
              <div className="text-3xl font-black text-white mt-1">&euro;4,250.00</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-2.5 py-1 rounded-md text-xs font-bold">
                +12.5%
              </span>
              <div className="bg-gray-800/80 p-1 rounded-lg flex items-center text-xs border border-gray-700">
                <button className="bg-gray-700 text-white px-3 py-1 rounded-md font-medium shadow">Weekly</button>
                <button className="text-gray-400 hover:text-white px-3 py-1 rounded-md font-medium transition-colors">Monthly</button>
                <button className="text-gray-400 hover:text-white px-3 py-1 rounded-md font-medium transition-colors">Yearly</button>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 flex items-end justify-between gap-3 h-36">
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl h-20 w-full flex items-end justify-center pb-2">
              <span className="text-[10px] text-gray-500">Mon</span>
            </div>
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl h-24 w-full flex items-end justify-center pb-2">
              <span className="text-[10px] text-gray-500">Tue</span>
            </div>
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl h-16 w-full flex items-end justify-center pb-2">
              <span className="text-[10px] text-gray-500">Wed</span>
            </div>
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl h-28 w-full flex items-end justify-center pb-2">
              <span className="text-[10px] text-gray-500">Thu</span>
            </div>
            <div className="bg-gray-900 border-2 border-gray-600 rounded-xl h-32 w-full flex flex-col items-center justify-between py-2 shadow-2xl relative">
              <span className="absolute -top-3 bg-gray-800 text-[10px] text-gray-300 px-2 py-0.5 rounded border border-gray-700">Friday (Today)</span>
            </div>
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl h-22 w-full flex items-end justify-center pb-2">
              <span className="text-[10px] text-gray-500">Sat</span>
            </div>
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl h-14 w-full flex items-end justify-center pb-2">
              <span className="text-[10px] text-gray-500">Sun</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. الأنشطة الأخيرة والأزرار السريعة */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 space-y-3">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Recent Activities</h3>
          
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2.5 rounded-lg text-gray-700">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Frankfurt Hub Drop-off</h4>
                <p className="text-xs text-gray-500">Successfully delivered 2x Porsche 911s. Client signed off.</p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-gray-400 whitespace-nowrap">2H AGO</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2.5 rounded-lg text-gray-700">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Manifest Updated</h4>
                <p className="text-xs text-gray-500">New routing instructions for Mission 01 received.</p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-gray-400 whitespace-nowrap">2 DAYS AGO</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2.5 rounded-lg text-gray-700">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">System Check Complete</h4>
                <p className="text-xs text-gray-500">Routine vehicle health telemetry data synchronized.</p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-gray-400 whitespace-nowrap">1 DAY AGO</span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Quick Action</h3>
          
          <div className="space-y-2.5">
            <Link
              href={`/${locale}/trips`}
              className="w-full bg-[#111827] hover:bg-gray-800 text-white p-3.5 rounded-xl text-xs font-bold flex items-center justify-between shadow transition-colors"
            >
              <span>BROWSE AVAILABLE TRIPS</span>
              <Search className="w-4 h-4 text-gray-400" />
            </Link>

            <Link
              href={`/${locale}/preferences`}
              className="w-full bg-[#111827] hover:bg-gray-800 text-white p-3.5 rounded-xl text-xs font-bold flex items-center justify-between shadow transition-colors"
            >
              <span>UPDATE MY PREFERENCES</span>
              <Sliders className="w-4 h-4 text-gray-400" />
            </Link>

            <Link
              href={`/${locale}/earnings`}
              className="w-full bg-[#111827] hover:bg-gray-800 text-white p-3.5 rounded-xl text-xs font-bold flex items-center justify-between shadow transition-colors"
            >
              <span>VIEW MY INVOICES</span>
              <FileText className="w-4 h-4 text-gray-400" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}