"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function CertificateSection() {
  const [showImage, setShowImage] = useState(false)

  return (
    <section id="certificate" className="text-center py-12">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">🎓 Sertifikat</h2>
      <Button onClick={() => setShowImage(!showImage)} className="mb-4">
        {showImage ? "Sembunyikan Sertifikat" : "Tampilkan Sertifikat"}
      </Button>
      {showImage && (
        <div className="flex justify-center">
          <img
            src="/certificate.jpg"
            alt="Sertifikat Web Development"
            className="max-w-full md:max-w-3xl shadow-lg rounded-lg"
          />
        </div>
      )}
    </section>
  )
}