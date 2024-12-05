import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import type { Service } from '../types/project';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold">${service.price}</span>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <ul className="space-y-3 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {service.deliveryTime && (
          <div className="flex items-center text-gray-600 mb-6">
            <Clock className="w-5 h-5 mr-2" />
            <span>{service.deliveryTime}</span>
          </div>
        )}

        <a
          href={service.paymentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get Started
          <ExternalLink className="w-4 h-4 ml-2 inline-block" />
        </a>
      </div>
    </div>
  );
}