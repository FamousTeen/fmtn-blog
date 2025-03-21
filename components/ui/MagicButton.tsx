import React from 'react'

const MagicButton = ({title, icon, iconPosition, handleClick, otherClasses}: {
    title: string; icon?: React.ReactNode; iconPosition?: string; handleClick?: () => void; otherClasses?: string;
}) => {
    return (
        <button className="relative w-full rounded-full inline-flex h-12 overflow-hidden p-[1px] focus:outline-none md:w-60 md:mt-10" onClick={handleClick}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
                {iconPosition == 'left' && icon}
                {title}
                {iconPosition == 'right' && icon}
            </span>
        </button>
    )
}

export default MagicButton