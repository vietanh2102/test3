import { ItemArrayImg } from "../../array/ItemArray";
import { product } from "../../array/ProducArray";
import Button from "../../Components/Button/Button";
import CardItem from "../../Components/CardItem/CardItem";
import ProductCard from "../../Components/ProductCard";
import mainBanner from "./../../assets/img/main-banner.png"
import oj1 from "./../../assets/img/object-01.png"
import oj2 from "./../../assets/img/object-02.png"
import oj3 from "./../../assets/img/object-03.png"
import oj4 from "./../../assets/img/object-04.png"
import oj5 from "./../../assets/img/object-05.png"
import oj6 from "./../../assets/img/object-06.png"
import oj7 from "./../../assets/img/object-07.png"
import mainImg from "./../../assets/img/window.png"
import newsImg1 from "./../../assets/img/news-img-01.png"
import newsImg3 from "./../../assets/img/news-object-03.png"
import newImg4 from "./../../assets/img/news-object-04.png"
import newImg5 from "./../../assets/img/news-object-05.png"
import img2 from "./../../assets/img/img-21.png"
import img3 from "./../../assets/img/news-img-03.png"
import img4 from "./../../assets/img/news-img-04.png"
import img5 from "./../../assets/img/news-img-05.png"
import xx1 from "./../../assets/img/news-object-02.png"
import xx2 from "./../../assets/news-object-03.png"

import videoOj5 from "./../../assets/img/video-object-05.png"
import videoOj6 from "./../../assets/img/video-object-06.png"
import videoOj7 from "./../../assets/img/video-object-07.png"
import videoOj4 from "./../../assets/img/video-object-04.png"
import videoOj3 from "./../../assets/img/video-object-03.png"
import videoOj1 from "./../../assets/img/video-object-01.png"
import videoOj9 from "./../../assets/img/video-object-09.png"
import videoOj8 from "./../../assets/img/video-object-08.png"
import video from "./../../assets/img/video.png"





function Home() {
    return (
        <div className="w-full mt-[8rem]">
            <img src={mainBanner} alt="err" />
            <div className="bg-intro-img w-full aspect-[10/3] bg-no-repeat bg-contain text-white my-auto text-left flex items-center " >
                <div className="w-2/3 ml-[9vw] ">
                    <span className="block sm:text-[3rem] lg:text-[5rem] leading-[1.2] tracking-[0.5rem] font-extrabold uppercase lg:mb-[2rem] md:mb-[1.9rem] 3xl:mb-[5.9rem]">
                        What Happened!
                    </span>
                    <span className="block sm:text-[1.5rem] lg:text-[2rem] leading-[1.75] tracking-normal lg:w-[66.7rem] ">
                        How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first
                        step to your brand's success. How to create
                        mobile-optimized videos in minutes.
                    </span>
                </div>
            </div>
            <div className="bg-bes py-[6rem] md:py-[6rem] 3xl:py-[15rem] text-center">
                <div className="text-[#f96400]  px-[9vw]">
                    <span className="block  sm:text-[3rem] lg:text-[5rem] leading-[1.2] tracking-[0.5rem] font-extrabold uppercase lg:mb-[2rem] mb-[1rem] sm:mb-[2.9rem]">
                        Best Product
                    </span>
                    <span className=" block sm:text-[1.5rem] lg:text-[2rem] leading-[1.6] tracking-normal max-w-[668px] lg:mt-[4.9rem] mx-auto">
                        How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first
                    </span>
                </div>
                <div className="flex mt-[74px] flex-wrap justify-center mx-[16px]">
                    {product.map(item => (
                        <ProductCard key={item.id} img={item.img} production={item.production} />
                    ))}
                </div>
            </div>
            <div className="my-[62px] lg:my-[94px] 3xl:my-[142px] bg-white px-[9vw] gap-x-[18px] gap-y-[32px] grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:gap-y-[72px] 2xl:grid-cols-5  3xl:grid-cols-5 mx-auto">
                {ItemArrayImg.map(item => (
                    <CardItem key={item.id} img={item.img} />
                ))}
            </div>
            <Button />
            <div className="bg-[#0565bb] py-[4.4rem] md:py-[6rem] 3xl:py-[15rem] text-center relative lg:pb-[76px] xl:pb-[113px] 2xl:pb-[170px]">
                <div className=" text-[#fcd32a]">
                    <div className="relative">
                        <span className="block text-[14px] sm:text-[20px] md:text-[45px] leading-[1.33] tracking-[4.5px] font-bold uppercase lg:mb-[2rem] mb-[1rem] sm:mb-[2.9rem]">
                            Brand Story
                        </span>
                    </div>
                    <div className="relative mb-[77px] px-[16px] z-[10]">
                        <span className=" block text-[13px] sm:text-[14px] 3xl:text-[16px] leading-[1.88] font-light lg:w-[682px]  max-w-[682px] lg:mt-[4.9rem] mx-auto">
                            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                            다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                        </span>
                    </div>
                </div>
                <div className="relative">
                    <img className="absolute w-[9.5vw] top-[-33%]  left-[8.8vw] z-[1]" src={oj1} alt="erro" />
                    <img className="w-[10vw] absolute bottom-[16px]  md:bottom-[32px]" src={oj6} alt="err" />
                    <img className="w-[9.3vw] absolute bottom-[16px] md:bottom-[32px] left-[10vw] z-[1]" src={oj7} alt="err" />
                    <div className=" relative z-[998]">
                        <img className="w-[65.25vw] mx-auto" src={mainImg} />

                    </div>
                    <img className="w-[18.22vw] absolute bottom-[16px] right-0 z-[9]" src={oj5} alt="err" />
                    <img className="w-[10.26vw] absolute bottom-[41%] right-0 z-[1]" src={oj4} />
                    <img className="w-[7.65vw] absolute right-[13.33vw] top-[-74%] z-[1]" src={oj2} />
                    <img className="w-[7.7vw] absolute  right-[8.9vw] top-[-67%] z-[1]" src={oj3} />
                </div>
            </div>
            <div className="bg-[#fccb05] text-[#110e03] py-[4.4rem] md:py-[6rem] 3xl:py-[15rem] text-center relative lg:pb-[66px] xl:pb-[100px] 2xl:pb-[149px]">
                <div className="relative">
                    <span className="block text-[14px] sm:text-[20px] md:text-[45px] leading-[1.33] tracking-[4.5px] font-bold uppercase lg:mb-[2rem] mb-[1rem] sm:mb-[2.9rem]">
                        Happened’s issue
                    </span>
                </div>
                <div className="relative mb-[77px] px-[16px] z-[10]">
                    <span className=" block text-[13px] sm:text-[14px] 3xl:text-[16px] leading-[1.88] font-light lg:w-[682px]  max-w-[682px] lg:mt-[4.9rem] mx-auto">
                        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                    </span>
                </div>
                <div className="lg:block hidden absolute top-[36px] right-[3.6vw]">
                    <img className="mb-[25px]" src={xx2} alt="err" />
                    <img src={xx1} alt="err" />
                </div>
                <Button />
                <div className="text-[30px] font-extrabold leading-[1.67] flex flex-wrap justify-center">
                    <div className="flex  items-center w-full h-[480px] sm:w-[378px] bg-[#ff5500] max-w-[378px] text-[36px] font-extrabold leading-[1.04] text-[#110e03] sm:text-[55px] relative ">
                        <div className="mx-auto">
                            <span className="block">whpn</span>
                            <span className="block mb-[63px]">issue</span>
                            <img className="mx-auto" src={newsImg1} alt="erro" />
                        </div>
                        <img className="absolute z-[9] bottom-[-87px] right-0" src={newsImg3} alt="err" />
                    </div>
                    <div className="w- full h-[480px] sm:w-[378px] max-w-[390px] text-white relative">
                        <div className="w-full h-[75px] bg-black flex items-center justify-center">
                            <span className="uppercase">b brand</span>
                        </div>
                        <img className="h-[405px]" src={img2} alt="err" />
                        <img className="absolute z-[9] top-[-34px] left-[49px]" src={newImg4} alt="err" />
                    </div>
                    <div className="w- full h-[480px] sm:w-[378px] max-w-[390px] text-white relative">
                        <div className="w-full h-[75px] bg-black flex items-center justify-center">
                            <span className="uppercase">c brand</span>
                        </div>
                        <img className="h-[405px]" src={img3} alt="err" />
                    </div>
                    <div className="w- full h-[480px] sm:w-[378px] max-w-[390px] text-white relative">
                        <div className="w-full h-[75px] bg-black flex items-center justify-center">
                            <span className="uppercase">d brand</span>
                        </div>
                        <img className="h-[405px]" src={img4} alt="err" />
                        <img className="absolute z-[9] bottom-[-50px] right-0" src={newImg5} alt="err" />
                    </div>
                    <div className="w- full h-[480px] sm:w-[378px] max-w-[390px] text-white relative">
                        <div className="w-full h-[75px] bg-black flex items-center justify-center">
                            <span className="uppercase">e brand</span>
                        </div>
                        <img className="h-[405px]" src={img5} alt="err" />
                    </div>
                </div>
            </div>


            <div>
                <div className="bg-white text-[#110e03] py-[148px]  3xl:py-[7.8vw] text-center relative lg:pb-[66px] xl:pb-[100px] 2xl:pb-[7.8vw]">
                    <div className="relative">
                        <span className="block text-[14px] sm:text-[20px] md:text-[45px] leading-[1.33] tracking-[4.5px] font-bold uppercase lg:mb-[2rem] mb-[1rem] sm:mb-[1.5vw]">
                            what happened
                        </span>
                    </div>
                    <div className="relative mb-[4vw] px-[16px] z-[10]">
                        <span className=" block text-[13px] sm:text-[14px] 3xl:text-[16px] leading-[1.88] font-light lg:w-[682px]  max-w-[682px] lg:mt-[2.55vw] mx-auto">
                            How to create mobile-optimized videos in minutes. Not a designer,
                            every team makes a lot of videos Can be trimmed. Take the first
                        </span>
                    </div>
                    <div className="lg:block  absolute top-[14vw] right-[7.8vw]">
                        <div className="relative">
                            <img className="w-[7.6vw]" src={videoOj7} alt="err" />
                            <img className="absolute w-[6.77vw] top-[6vw] right-[4.9vw]" src={videoOj6} alt="err" />
                        </div>
                    </div>
                    <img className="absolute top-0 left-[11.77vw] w-[7.6vw]" src={videoOj5} alt="err" />
                    <Button />
                    <div className="mx-auto mb-[20.4vw] relative">
                        <img className=" relative z-[10] w-[65.15vw] mx-auto" src={video} alt="" />
                        <img className="absolute bottom-[23.13vw] left-[-17.02%] w-[31.04vw] " src={videoOj4} alt="err" />
                        <img className="absolute bottom-[-5vw] left-[11.61vw] w-[7.6vw] z-[9] " src={videoOj3} alt="err" />
                        <img className=" absolute w-[21.4vw] z-[10] left-[18.12vw] bottom-[-14vw] " src={videoOj1} alt="err" />
                        <img className=" absolute w-[17.86vw] z-[8] right-[-8.75vw] bottom-[16.82vw] " src={videoOj9} alt="err" />
                        <img className=" absolute w-[31vw] z-[9] right-[-9vw] bottom-[-7.8vw] " src={videoOj8} alt="err" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;