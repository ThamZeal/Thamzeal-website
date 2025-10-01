'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getSuccessMetrics, SuccessMetric } from '../../sanity/lib/data';

interface MetricCardProps {
  metric: SuccessMetric;
  delay: number;
}

const MetricCard = ({ metric, delay }: MetricCardProps) => {
  const bgColorClass = metric.bgColor ? `bg-${metric.bgColor}` : 'bg-white';
  const borderColorClass = metric.borderColor ? `border-${metric.borderColor}` : 'border-black';
  const hoverBgClass = metric.bgColor === 'blue-100' ? 'hover:bg-blue-200' : 'hover:bg-blue-100';
  const hoverBorderClass = metric.borderColor === '[#065C9B]' ? 'hover:border-[#065C9B]' : 'hover:border-[#065C9B]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className={`${bgColorClass} ${hoverBgClass} border-2 ${borderColorClass} ${hoverBorderClass} p-6 rounded-2xl shadow-lg text-center transition-all duration-300`}
    >
      <span className="text-4xl md:text-5xl font-bold text-[#065C9B] block mb-2">
        {metric.number}
      </span>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {metric.title}
      </h3>
      <p className="text-gray-600">
        {metric.description}
      </p>
    </motion.div>
  );
};

interface SuccessMetricsSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const SuccessMetricsSection = ({ 
  title = "Our Success Metrics", 
  subtitle = "Key performance indicators across our business divisions.",
  className = "w-full bg-gray-50 py-16"
}: SuccessMetricsSectionProps) => {
  const [metrics, setMetrics] = useState<SuccessMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        const data = await getSuccessMetrics();
        setMetrics(data);
      } catch (err) {
        setError('Failed to load success metrics');
        console.error('Error fetching success metrics:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (loading) {
    return (
      <section className={className}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-gray-900 text-left mb-10">
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border-2 border-gray-200 p-6 rounded-2xl shadow-lg animate-pulse">
                <div className="h-12 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={className}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-gray-900 text-left mb-10">
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <div className="text-center text-red-600 bg-red-50 p-8 rounded-lg">
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (metrics.length === 0) {
    return (
      <section className={className}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-gray-900 text-left mb-10">
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <div className="text-center text-gray-600 bg-gray-100 p-8 rounded-lg">
            <p>No success metrics available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={className}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-gray-900 text-left mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric._id}
              metric={metric}
              delay={0.2 + (index * 0.1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetricsSection;