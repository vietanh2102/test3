import { useEffect } from "react";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import { toTopPage } from "../ultils/scrollTop";
import { useParams } from "react-router-dom";

interface Props {
    children: React.JSX.Element
}

function DefaultLayout({ children }: Props) {
    const path = useParams()
    useEffect(() => {
        toTopPage(0)
    }, [path])
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;