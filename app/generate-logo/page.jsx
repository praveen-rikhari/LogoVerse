"use client"
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailContext } from '../_context/UserDetailContext'
import Prompt from '../_data/Prompt';
import axios from 'axios';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ImageDown, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

function GenerateLogo() {
  const { userDetail } = useContext(UserDetailContext);
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [logoImage, setLogoImage] = useState();

  useEffect(() => {
    if (typeof window !== "undefined" && userDetail?.email) {
      const storage = localStorage.getItem('formData');
      if (storage) {
        setFormData(JSON.parse(storage));
        console.log(JSON.parse(storage));
      }
    }
  }, [userDetail]);

  useEffect(() => {
    if (formData?.title) {
      GenerateAILogo();
    }
  }, [formData]);

  const GenerateAILogo = async () => {
    setLoading(true);
    const PROMPT = Prompt.LOGO_PROMPT
      .replace('{logoTitle}', formData?.title)
      .replace('{logoDesc}', formData?.desc)
      .replace('{logoColor}', formData?.palette)
      .replace('{logoDesign}', formData?.design?.title)
      .replace('{logoPrompt}', formData?.design?.prompt);

    console.log(PROMPT);

    // Generate Logo Prompt from AI
    const result = await axios.post('/api/ai-logo-model', {
      prompt: PROMPT,
      email: userDetail?.email,
      title: formData.title,
      desc: formData.desc
    });

    console.log(result?.data);
    setLogoImage(result.data?.image);
    setLoading(false);
  };

  // Function to handle logo download
  const handleDownload = () => {
    if (logoImage) {
      const link = document.createElement('a');
      link.href = logoImage;
      link.download = 'generated_logo.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {
        loading ? (
          <div className="flex flex-col items-center">
            <p className="mb-2 text-gray-600 text-lg">🪄 Generating logo. Please wait this might take up to 2-3 minutes....</p>
            <Image src="/loading.gif" alt="Loading..." width={350} height={350} priority />
            <p className="mb-2 text-gray-600 text-lg">❌ DO NOT REFRESH !</p>
          </div>
        ) : (
          logoImage ? (
            <div className="flex flex-col items-center space-y-6">
              <Image src={logoImage} alt="Generated Logo" width={350} height={350} className="rounded-lg shadow-lg" />

              <div className="flex space-x-4">
                <Button onClick={handleDownload}>
                  <ImageDown/> Download Logo
                </Button>

                <Link href={'/dashboard'}>
                  <Button variant="outline">
                    <LayoutDashboard/> Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-lg">No logo generated yet.</p>
          )
        )
      }
    </div>
  );
}

export default GenerateLogo;
