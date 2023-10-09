import { useEffect } from "react"
import s from "./Pagination.module.css"


function Pagination(props){
    
    const {setCrntPage, countElem, crntPage,products} = props
    useEffect(()=>{

    },[products])

    const numberPage = [] //массив который будет определять кол-во страниц исходя из длины нашего массива с продуктами.Элементы кнопочки с нумерацией страниц

    for(let i = 1; i <= countElem; i++){
        numberPage.push(i)
    }
    

    // const formHandle = (e) => {
    //     if (e.key === 'Enter'){
    //         setCrntPage((e.target.value > countElem) ? countElem : e.target.value)
    //     }
    // }


    return(
       <div>
         <div style={{display: 'flex', gap: '10px'}}>
            {numberPage.map(elem => 
                <div className={s.pag} 
                key={elem}
                    onClick={() => setCrntPage(elem)} 
                    style={{backgroundColor: (elem === crntPage) ? '#4ba983': 'white',color:(elem === crntPage) ? 'white': '#582b53'}}
                >
                    {elem}
                </div>
            )}
        </div>
        {/* <input onKeyDown={formHandle} placeholder="Введите номер страницы"/> */}
       </div>
    )
}


export default Pagination