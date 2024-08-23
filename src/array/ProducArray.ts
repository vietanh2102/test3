import production1 from "./../assets/img/producticon-01.png"
import production2 from "./../assets/img/producticon-02.png"
import production3 from "./../assets/img/producticon-03.png"
import img1 from "./../assets/img/best-image-01.png"
import img2 from "./../assets/img/best-image-02.png"
import img3 from "./../assets/img/best-image-03.png"

interface Product {
    id: number
    production: string,
    img: string
}
export const product: Product[] = [
    {
        id: 0,
        production: production1,
        img: img1
    },
    {
        id: 1,
        production: production2,
        img: img2
    },
    {
        id: 2,
        production: production3,
        img: img3
    },
]