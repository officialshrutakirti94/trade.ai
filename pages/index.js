import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Hero from '../components/hero'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    </>
  )
}
