import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { ServicePackage } from '../types/project';

interface PackageCardProps {
  package: ServicePackage;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg overflow-hidden border border-blue-200 hover:shadow-xl transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold">${pkg.totalPrice}</span>
          <span className="text-gray-500 text-sm ml-2">one-time payment</span>
        </div>
        <p className="text-gray-600 mb-4">{pkg.description}</p>
        
        <ul className="space-y-3 mb-6">
          {pkg.services.map((service, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{service}</span>
            </li>
          ))}
        </ul>

        <a
          href={pkg.paymentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Purchase Package
          <ExternalLink className="w-4 h-4 ml-2 inline-block" />
        </a>
      </div>
    </div>
  );
}