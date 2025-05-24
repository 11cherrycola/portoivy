"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Dialog } from "@headlessui/react"

export default function ProjectsSection({ projectsRef }: { projectsRef: React.RefObject<HTMLElement> }) {
  const [isSertifikatOpen, setIsSertifikatOpen] = useState(false)

  return (
    <section ref={projectsRef} className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
            <Briefcase className="inline mr-2 mb-1" /> Sertifikat
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto"></div>
        </motion.div>

        {[{ title: "", image: "/theme.jpeg" }].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <Card className="overflow-hidden border-pink-100 group-hover:border-pink-300 transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <div className="inline-block px-2 py-1 bg-pink-100 text-pink-600 text-xs rounded-full mb-2">
                  Sertifikat
                </div>
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-pink-600 transition-colors">
                  {project.title}
                </h3>
                <button
                  onClick={() => setIsSertifikatOpen(true)}
                  className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded inline-flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" /> Lihat Sertifikat
                </button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal Sertifikat */}
      <Dialog open={isSertifikatOpen} onClose={() => setIsSertifikatOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <Dialog.Panel className="bg-white rounded-xl shadow-xl max-w-4xl w-full p-4">
            <Dialog.Title className="text-xl font-semibold mb-4"></Dialog.Title>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <img src="/sertifikat/webdev.jpg" alt="Webdev" className="w-full rounded shadow" />
              <img src="/sertifikat/Bisnis I.Jpg" alt="Bisnis I" className="w-full rounded shadow" />
              <img src="/sertifikat/Bisnis II.Pdf" alt="Bisnis II" className="w-full rounded shadow" />
            </div>
            <div className="text-right mt-4">
              <button
                onClick={() => setIsSertifikatOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Tutup
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  )
}