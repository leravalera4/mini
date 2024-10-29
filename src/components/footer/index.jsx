"use client"
import React, { useState, useEffect } from 'react'
import './styles.css'

export default function Footer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <footer className={`footer ${isLoaded ? 'normal' : 'fixed'}`}>
      {/* Контент футера */}
      <p>© The content of this site is intended for personal purposes only...</p>
    </footer>
  )
}
