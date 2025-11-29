function MenuCard({menuImg,RatingsImg, name, desc,onBuyClick}){
    return(
       
    <div className ="flex flex-col w-[300px] h-[570px] rounded-2xl justify-around items-center dark:bg-zinc-950 bg-white  md:border-0 border shadow-sm">
        <div className="w-[295px] h-[350px] justify-center dark:text-white items-center mt-[-15px] mb-[-88px]"><img className="rounded-2xl h-[250px]"src ={menuImg}/></div>
        <div className ="flex flex-row w-[250px] justify-center dark:text-white items-center h-[50px] gap-[35px]"><img className="w-[50px] h-[50px]" src={RatingsImg}/>
        <div className="font-extrabold ">5.0</div>
        </div>
        <div className =" text-2xl font-bold text-black dark:text-white justify-start mt-5">{name}</div>
        
        <div className ="text-sm my-[5px] mx-[25px]  text-gray-500 justify-center items-center">{desc}</div>
        <div onClick={onBuyClick} className="w-[125px] h-[45px] flex flex-row text-black rounded-2xl text-sm justify-center hover:bg-red-400 dark:border-white dark:text-white dark:hover:bg-red-600 items-center border-2 border-black">Add to Cart</div>

</div>

    )
}

export default MenuCard;
