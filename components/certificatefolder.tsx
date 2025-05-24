"use client"

import type React from "react"
import TextPressure from "@/components/TextPressure/TextPressure"
import BlobCursor from "@/components/BlobCursor/BlobCursor"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Instagram, Linkedin, Download, User, Code, Briefcase, Heart } from "lucide-react"
import Image from "next/image"
import { Dialog } from "@headlessui/react"

const CertificateFolder = ({ open, toggle }: { open: boolean; toggle: () => void }) => (
  <div className="flex flex-col items-center py-10">
    <div onClick={toggle} className="cursor-pointer hover:scale-105 transition">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: open ? 1.05 : 1 }}
        className="p-4"
      >
        <Image
          src="/folder-icon.png"
          alt="Folder"
          width={100}
          height={100}
          className="drop-shadow-lg"
        />
      </motion.div>
      <p className="text-pink-600 font-bold text-lg mt-2">Klik untuk buka sertifikat</p>
    </div>

    {open && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-3 gap-6 mt-10 w-full max-w-5xl"
      >
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="rounded-lg border-4 border-pink-200 aspect-video flex items-center justify-center overflow-hidden shadow-md bg-white"
          >
            <Image
              src={`/certificate${num}.jpg`}
              alt={`Sertifikat ${num}`}
              width={500}
              height={350}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        ))}
      </motion.div>
    )}
  </div>
)

const certificateFolder = ({ open, toggle }: { open: boolean; toggle: () => void }) => (
    <div className="flex flex-col items-center py-10">
      {/* Folder Icon */}
      <div onClick={toggle} className="cursor-pointer hover:scale-105 transition">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: open ? 1.05 : 1 }}
          className="p-4"
        >
          <Image
            src="/folder-icon.png"
            alt="Folder"
            width={100}
            height={100}
            className="drop-shadow-lg"
          />
        </motion.div>
        <p className="text-pink-600 font-bold text-lg mt-2">Klik untuk buka sertifikat</p>
      </div>
  
      {/* Certificate Frames */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-3 gap-6 mt-10 w-full max-w-5xl"
        >
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="rounded-lg border-4 border-pink-200 aspect-video flex items-center justify-center overflow-hidden shadow-md bg-white"
          >
            <Image
              src={`/certificate${num}.jpg`}
              alt={`Sertifikat ${num}`}
              width={500}
              height={350}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        ))}
      </motion.div>
    )}
  </div>
)