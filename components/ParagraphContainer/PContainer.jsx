export function PContainer({ title, content }) {
    return (
        <div className="flex flex-row gap-2 sm:gap-3">
            <p className="font-semibold sm:font-bold text-sm sm:text-lg capitalize">{title}:</p>
            <p className="text-start text-sm sm:text-lg">{content}</p>
        </div>
    )
}

export function Paragraph({style,content,children}){
    return(
        <div className={style}>
            {content}
            {children}
        </div>
    )
}