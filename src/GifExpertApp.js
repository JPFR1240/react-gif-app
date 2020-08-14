
import React, {useState} from 'react';

import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';
export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories }/>
           <hr/>

            <ol>
                {
                    categories.map( (category) => (
                        < GifGrid category={ category }
                        key={ category }/>
                    )
                    )
                }
            </ol>
        </>
    )
}

//apikey= BotHscnXPfjQbuUyj16R5O8LGnMIaOSW