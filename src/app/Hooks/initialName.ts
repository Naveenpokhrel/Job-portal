import { create } from "zustand";


import { persist,devtools } from "zustand/middleware";




interface initialNam {

    initialName:string,
    newInitialName: (a:string)=>void,
    
}


const useInitialName = create<initialNam>()(

    devtools(

        persist(
            (Set)=>({

                initialName:"",
                newInitialName: (a)=>Set((c)=>({initialName:a})),
            }),{name:"LogIn"}




        )
    )
)

export default useInitialName