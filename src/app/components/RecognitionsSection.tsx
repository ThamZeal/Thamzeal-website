"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Recognition } from "../../sanity/lib/data";

interface RecognitionsProps {
  recognitions: Recognition[];
}

export default function RecognitionsSection({ recognitions }: RecognitionsProps) {
  if (!recognitions || recognitions.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-gray-900 text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Recognized by
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Officially registered and recognized by leading government initiatives supporting innovation and entrepreneurship in India.
          </motion.p>
        </div>

        {/* Recognition Logos */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {recognitions.map((recognition, index) => (
            <motion.div
              key={recognition._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
            >
              <Image
                src={recognition.logo}
                alt={recognition.logoAlt}
                width={200}
                height={64}
                className="h-16 w-auto max-w-[200px] object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
