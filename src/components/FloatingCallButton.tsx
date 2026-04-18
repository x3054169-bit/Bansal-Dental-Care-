import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919782689909?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20with%20Dr%20Ashutosh%20Bansal"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform"
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Call Button (Mobile Only visible/styled specifically) */}
      <motion.a
        href="tel:09782689909"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-brand-accent text-brand-primary rounded-full flex items-center justify-center shadow-2xl transition-transform"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
};

export default FloatingCallButton;
