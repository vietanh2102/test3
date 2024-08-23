import go from "./../assets/img/go-icon.png"

interface Props {
    production: string,
    img: string
}
function ProductCard({ production, img }: Props) {
    return (
        <div className="relative max-w-[369px]">
            <img className="absolute w-[17.6%] top-[-8%] " src={production} alt="err" />
            <img className="lg:w-[27.23vw]" src={img} alt="err" />
            <div className="w-[70.55%] max-w-[369px] mx-auto translate-y-[-50%]">
                <div className="relative border-solid border-[#020001] border-[3px] bg-white flex justify-between items-center ">
                    <p className="w-[189px] text-[16px] font-extrabold text-left leading-[1.25] ml-[7.3%]">
                        How to create mobile-optimized
                    </p>
                    <img className=" mr-[7px] w-[17.61%] max-w-[65px] mt-[8px] mb-[6px]" src={go} alt="err" />
                </div>
            </div>
        </div>
    );
}

export default ProductCard;