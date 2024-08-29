import ServiceCard from '../components/ServiceCard';

export default function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <div className="service-cards">
        <ServiceCard title="Service 1" description="Description of Service 1" />
        <ServiceCard title="Service 2" description="Description of Service 2" />
        {/* Add more ServiceCards as needed */}
      </div>
    </div>
  );
}
