import './style.css'
import Sidebar from '@/components/Sidebar';
import React from 'react';

interface Props {
  children: React.ReactNode;
}


export default async function RootLayout({
  children
}:Props) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="main">
            <Sidebar />
            <section className="col note-viewer">{children}</section>
          </div>
        </div>
      </body>
    </html>
  )
}