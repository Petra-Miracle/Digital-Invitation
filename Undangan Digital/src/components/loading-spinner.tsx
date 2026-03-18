import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Envelope Icon */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          className="relative"
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-24 h-24 text-blue-500 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Envelope body */}
            <rect
              height="16"
              rx="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="20"
              x="2"
              y="4"
            />
            {/* Envelope flap */}
            <path
              d="M22 7L13.03 12.7a2 2 0 0 1-2.06 0L2 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Heart decoration */}
          <motion.div
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 1, 0],
            }}
            className="absolute -top-2 -right-2"
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              className="w-6 h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <motion.h2
            animate={{ opacity: [0.5, 1, 0.5] }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent"
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Undangan Digital
          </motion.h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Memuat pengalaman yang indah...
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
              }}
              className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
