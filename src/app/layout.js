import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Inter } from 'next/font/google'

import Header from './Compnents/layout/Header';
import LeftAside from './Compnents/layout/LeftAside';
import RightAside from './Compnents/layout/RightAside';
import Footer from './Compnents/layout/Footer';

// Import { someNamedInport } from 'somelibrary'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) { //function start
  

  //funciton return statment
  return (
    <html lang="en">
        <body className={inter.className}>
            <div class="container a_tbdr p-0">
                <Header />
                <main className="a_tbdr m-3">
                    <div className="row m-0 a_tbdr">
                        <LeftAside />
                            {children}
                        <RightAside />
                    </div>
                </main>
                <Footer />
            </div>
        </body>
    </html>
  )

} //fuction End
