import Image from "next/image";
const Loading = () => {
    
    return(
        <div className="flex justify-center item-center py-12 "> 
            <image width={150} height={150} alt="Is loading" src={"../public/Loading.svg"}/>
        </div>
    )
}
export default Loading;