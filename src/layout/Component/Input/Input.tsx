import { UseFormRegister, RegisterOptions } from "react-hook-form";

interface Props {
    title?: string
    name: string,
    note?: string,
    register: UseFormRegister<any>
    rules: RegisterOptions
}
function Input({ name, note, register, rules, title }: Props) {
    return (
        <div className="py-[12px] pl-[11px] border-solid border-[1px] border-[#a1a1a1]  relative">
            <input
                className="w-full h-[15px] outline-none"
                placeholder={title}
                {...register(name, rules)}
            />
            {note &&
                <span className="absolute right-[17px] text-[#659bf5]">
                    {note}
                </span>
            }
        </div>
    );
}

export default Input;