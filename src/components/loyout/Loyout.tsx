import { FC, ReactNode } from "react"

interface LoyoutProps {
    children: ReactNode
}

const Loyout: FC<LoyoutProps> = ({ children }) => {
    return (
        <div className="container">

            <main className="main">{children}</main>
            
        </div>
    )
}

export default Loyout