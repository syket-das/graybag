'use client';
import ContactUs from '@/components/layout/sections/ContactUs';
import { FooterSection } from '@/components/layout/sections/footer';
import React from 'react';
import { Bento } from './_components/Bento';

const page = () => {
  return (
    <div>
      <Bento />
      <div className="max-h-screen">
        <ContactUs />
        <FooterSection />
      </div>
    </div>
  );
};

export default page;
