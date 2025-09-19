import { motion } from "framer-motion";
import { type Client } from "../../sanity/lib/data";
import Image from "next/image";

interface ClientsProps {
  clients: Client[];
}

export default function ClientsSection({ clients }: ClientsProps) {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-gray-900 text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Trusted by teams and brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Some of the organizations we've worked with.
          </motion.p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center p-8"
            >
              <Image
                src={client.logo}
                alt={client.logoAlt}
                width={200}
                height={64}
                className="h-16 w-auto transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
