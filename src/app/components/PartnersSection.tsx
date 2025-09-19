import { motion } from "framer-motion";
import { type Partner } from "../../sanity/lib/data";
import Image from "next/image";

interface PartnersProps {
  partners: Partner[];
}

export default function PartnersSection({ partners }: PartnersProps) {
  return (
    <section className="w-full bg-gray-50 py-16">
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
            Partnering with
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Explore our diverse brand divisions and exciting collaboration.
          </motion.p>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center p-8"
            >
              <Image
                src={partner.logo}
                alt={partner.logoAlt}
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
