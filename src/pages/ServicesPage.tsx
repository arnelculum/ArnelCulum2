import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { videoServices, websiteServices } from '../data/services';

export function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Video Services</h2>
        <p className="text-gray-600 mb-8">Professional video editing services for all your needs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Website Services</h2>
        <p className="text-gray-600 mb-8">Complete website solutions with ongoing support</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}