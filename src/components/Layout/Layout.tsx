import { FC, ReactNode } from 'react'
import Footer from '~/components/Footer/Footer'
import Header from '~/components/Header/Header'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-4xl w-full mx-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
