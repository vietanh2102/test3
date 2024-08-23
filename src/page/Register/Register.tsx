import Input from "../../layout/Component/Input/Input";
import LoginButton from "../../Components/Button/LoginButton";
import { useForm } from 'react-hook-form'
interface FormRegister {
    email: string,
    password: string,
    comfirmPassword: string,
    address: string,
    addressAdd?: string,
    contact: string,
    confirmPolicy: true,
    receiveAdvertising: boolean
}
function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormRegister>()
    const onSubmit = (formRegister: FormRegister) => { console.log(formRegister); }
    console.log(watch());
    return (
        <div className="px-[32px]  mt-[80px]">
            <div className="w-full sm:w-[454px] mx-[auto] pb-[67px] lg:pb-[177px] ">
                <div className="pb-[42px]  border-b-[2px] border-solid border-[#111111]">
                    <div className="py-[57px] border-solid border-b-[2px] border-[#222222] text-center mb-[33px]">
                        <span className="text-[35px] sm:text-[45px] text-[#0565bb] text-center font-extrabold leading-[1.33]">
                            Welcome!
                        </span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-[16px]">
                            <label className="text-[16px] font-semibold text-[#222222]">아이디(이메일) *</label>
                            <Input
                                title="example@email.com"
                                register={register}
                                name="email"
                                rules={{
                                    required: 'Enter your email'
                                }}
                            />
                            <div className="ml-[8px] h-[15px]">
                                <span className="text-red-600 text-[10px]">{errors.email?.message}</span>
                            </div>
                        </div>
                        <div className="mb-[16px]">
                            <label className="text-[16px] font-semibold text-[#222222]">비밀번호 *</label>
                            <Input
                                title="영문, 숫자, 특수문자를 포함한 8~12자리"
                                register={register}
                                name="password"
                                rules={{
                                    required: 'Enter Your Password'
                                }}
                            />
                            <div className="ml-[8px] h-[15px]">
                                <span className="text-red-600 text-[10px]">{errors.password?.message}</span>
                            </div>
                        </div>
                        <div className="mb-[16px]">
                            <label className="text-[16px] font-semibold text-[#222222]">비밀번호 확인 *</label>
                            <Input
                                register={register}
                                name="comfirmPassword"
                                rules={{
                                    required: 'Enter Your comfirm Password'
                                }}
                            />
                            <div className="ml-[8px] h-[15px]">
                                <span className="text-red-600 text-[10px]">{errors.comfirmPassword?.message}</span>
                            </div>
                        </div>
                        <div className="mb-[16px]">
                            <label className="text-[16px] font-semibold text-[#222222]">주소</label>
                            <Input
                                register={register}
                                name="address"
                                rules={{
                                    required: 'Enter Your address'
                                }}
                                note="검색"
                            />
                            <div className="ml-[8px] h-[15px]">
                                <span className="text-red-600 text-[10px]">{errors.address?.message}</span>
                            </div>
                        </div>
                        <div className="mb-[16px]">
                            <Input
                                title="추가 주소"
                                register={register}
                                name="addressAdd"
                                rules={{

                                }}
                            />
                            <div className="ml-[8px] h-[15px]">
                            </div>
                        </div>
                        <div className="mb-[16px]">
                            <label className="text-[16px] font-semibold text-[#222222]">연락처</label>
                            <Input
                                title="연락처"
                                name="contact"
                                rules={{}}
                                register={register}
                            />
                            <div className="ml-[8px] h-[15px]">
                            </div>
                        </div>
                        <div className="text-[14px] font-light leading-[4.29] ">
                            <div className="flex items-center gap-[10px] justify-end">
                                <input
                                    {...register("confirmPolicy")}
                                    checked={true}
                                    readOnly={true}
                                    type="checkbox"
                                />
                                <label>
                                    <span className="text-[#659bf5] text-[14px] font-light ">
                                        이용약관
                                        <span className="text-[#000000]">및</span>
                                        개인정보 처리 방침<span className="text-[#000000]">에 동의합니다. (필수)</span>
                                    </span>
                                </label>
                            </div>
                            <div className="flex items-center gap-[10px] justify-end">
                                <input
                                    type="checkbox"
                                    {...register("receiveAdvertising")} />
                                <label className="text-[14px] font-light "> 광고 및 메일 수신에 동의합니다. (선택)</label>
                            </div>
                        </div>
                        <LoginButton title="가입하기" />
                    </form>
                </div>


            </div>
        </div>
    );
}

export default Register;