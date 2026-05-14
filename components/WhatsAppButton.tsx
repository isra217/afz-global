"use client";

import { MessageCircle, Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const whatsappNumber = "923XXXxxxxxx"; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20AFZ%20Global`;

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3">
      {/* Chatbot Button */}
      <motion.a
        href="#contact"
        className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Bot className="w-6 h-6" />
        <span className="font-semibold text-sm">Chatbot</span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 bg-linear-to-r from-green-400 to-green-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-semibold text-sm">WhatsApp</span>
      </motion.a>
    </div>
  );
}
