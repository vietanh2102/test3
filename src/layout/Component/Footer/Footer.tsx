import icon1 from "./../../../assets/img/snsicon-01@3x.png"
import icon2 from "./../../../assets/img/snsicon-02@3x.png"
import icon3 from "./../../../assets/img/snsicon-03@3x.png"


function Footer() {
    return (
        <div className="px-[5.2vw] ">
            <div className="lg:flex text-[#111111] text-[14px] leading-[2.14] border-y-[1px] border-solid border-[#f4f4f4] py-[49px]">
                <div className="mb-[16px] lg:w-[50%] lg:mb-0">
                    <span className="font-bold">what happened</span>
                    <span className="block  font-light  lg:w-[12.18vw]">
                        [공지] 개인 정보 처리 방침 변경 사전 안내
                        [공지] 29CM 강남 스토어 영업 종료
                        [공지] 개인 정보 처리 방침 변경 사전 안내
                        [공지] iOS 10 이하 버전 지원 중단 안내
                        [공지] 개인 정보 처리 방침 변경 사전 안내
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-x-[16px]  lg:grid-cols-4 gap-y-[16px] lg:gap-y-0 lg:w-[50%]">
                    <div className="lg:lg:max-w-[6.3vw] xl:max-w-[5.3vw]">
                        <span className="font-bold">about us</span>
                        <span className="block  font-light">
                            회사 소개
                            인재 채용
                            상시 할인 혜택
                        </span>
                    </div>
                    <div className="lg:max-w-[6.3vw] xl:max-w-[5.3vw]">
                        <span className="font-bold">my order</span>
                        <span className="block  font-light">
                            내 주문
                            주문 배송
                            취소 / 교환 / 반품 내역
                            상품 리뷰 내역
                            증빙 서류 발급
                        </span>
                    </div>
                    <div className="lg:max-w-[6.3vw] xl:max-w-[5.9vw]">
                        <span className="font-bold">my account</span>
                        <span className="block  font-light">
                            회원 정보 수정
                            회원 등급
                            마일리지 현황
                            쿠폰
                        </span>
                    </div>
                    <div className="lg:max-w-[5.9vw] 3xl:max-w-[5.3vw]">
                        <span className="font-bold">help</span>
                        <span className="block  font-light">
                            1 : 1 상담 내역
                            상품 Q & A 내역
                            공지 사항
                            자주하는 질문
                            고객의 소리
                        </span>
                    </div>

                </div>
            </div>
            <div className="lg:flex lg:mb-[113px] mb-[64px] text-[#111111] text-[14px] leading-[2.14] mt-[22px]">
                <div className="lg:w-[50%]">
                    <span className="-\32 020-2021-what-happened-corp-l-">
                        © 2020-2021 what happened corp  l  (주) 왓헤픈<span className="text-style-1">｜</span>
                        대표자 : 홍길<span className="text-style-2">｜</span>
                        사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                        서울특별시 강남구 도산대로 8길 1<span className="text-style-3">｜</span>
                        FAX : 070-0000-0000  l  서비스 이용약관
                        <span className="text-style-4">개인정보처리방침</span>
                    </span>
                </div>
                <div className="flex  justify-end lg:w-[50%]  mt-[16px] lg:mt-[0]">
                    <img src={icon1} alt="err" />
                    <img src={icon2} alt="err" />
                    <img src={icon3} alt="err" />
                </div>
            </div>
        </div>
    );
}

export default Footer;