import LoginButton from "../../Components/Button/LoginButton";
import Input from "../../layout/Component/Input/Input";
import naver from "./../../assets/img/naver-icon@3x.png"
import kakao from "./../../assets/img/kakao-icon@3x.png"
import fb from "./../../assets/img/facebook-icon@3x.png"
import gg from "./../../assets/img/google-icon@3x.png"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
interface FormLogin {
    email: string,
    password: string
}

function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormLogin>()
    const onSubmit = (formRegister: FormLogin) => { console.log(formRegister); }
    console.log(watch());
    return (
        <div className="px-[32px]  mt-[80px]">
            <div className=" w-full sm:w-[454px] mx-[auto]">
                <div className="py-[57px] border-solid border-b-[2px] border-[#222222] text-center mb-[33px]">
                    <span className="text-[35px] sm:text-[45px] text-[#0565bb] text-center font-extrabold leading-[1.33]">
                        Welcome!
                    </span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="pb-[16px] relative">
                        <Input
                            title="아이디 (이메일)"
                            register={register}
                            name="email"
                            rules={{
                                required: 'Enter your email'
                            }}
                        />
                        <div className="ml-[8px] absolute bottom-0">
                            <span className="text-red-600 text-[10px]">{errors.email?.message}</span>
                        </div>
                    </div>
                    <div className="pb-[16px] mb-[7px] relative">
                        <Input
                            title="비밀번호"
                            register={register}
                            name="password"
                            rules={{
                                required: 'Enter your password'
                            }}
                        />
                        <div className="ml-[8px] absolute bottom-0">
                            <span className="text-red-600 text-[10px]">{errors.password?.message}</span>
                        </div>
                    </div>
                    <LoginButton title="로그인하기" />
                </form>
                <div className="text-center text-[16px] font-medium leading-[3.75] tracking-[1.6px] mb-[43px] mt-[73px]">
                    <span>SNS 계정으로 로그인</span>
                </div>
                <div className="flex justify-between mb-[43px]">
                    <img className="max-w-[66px]" src={naver} alt="erro " />
                    <img className="max-w-[66px]" src={kakao} alt="erro " />
                    <img className="max-w-[66px]" src={fb} alt="erro " />
                    <img className="max-w-[66px]" src={gg} alt="erro " />
                </div>
                <Link to={"/register"}>
                    <LoginButton title="계정이 없으신가요? 간편가입하기" primery />
                </Link>

                <div className="flex justify-around text-[#1a58f2] mt-[32px] mb-[147px]">
                    <span>아이디(이메일)찾기</span>
                    <span>
                        비밀번호 찾기
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Login;