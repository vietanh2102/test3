
interface Props {
    title: string
    primery?: boolean
}
function LoginButton({ title, primery }: Props) {
    return (
        <div className={`${primery && ``} w-full h-[60px] mt-[23px]`}>
            <button type="submit" className={`${primery ? `bg-[#ffffff] text-[#020001] border-solid border-[1px] border-[#020001] ` : `bg-[#0565bb] text-white `} w-full py-[22px] text-[16px] h-[15px] font-medium leading-[3.75] tracking-[1.6px] flex items-center justify-center `}>
                {title}
            </button>
        </div>
    );
}

export default LoginButton;