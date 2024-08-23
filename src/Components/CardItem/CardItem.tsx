import heartIcon from './../../assets/img/hearticon.png'

interface Props {
    img: string
}

function CardItem({ img }: Props) {
    return (
        <div className='max-w-[300px] '>
            <img className="max-w-[300px] w-full" src={img} alt="erro" />
            <div>
                <span className="text-[#222222] text-[14px] lg:text-[16px] xl:text-[18px] leading-[1.94] font-semibold"> [what happen] How to create</span>
            </div>
            <div className='relative text-[16px] leading-[2.19] '>
                <span>2,500 won</span>
                <div className='flex absolute right-0 bottom-0'>
                    <div className='flex items-center mr-[7px]'>
                        <img className=' w-[20px] h-[20px]' src={heartIcon} alt='erro' />
                    </div>

                    <span className='text-[#666666]'>236</span>
                </div>
            </div>
        </div>
    );
}

export default CardItem;