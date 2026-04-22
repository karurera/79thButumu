import { useEffect, useState } from 'react'
import './template.css'
import LikeButton from '../tool/likeButton';
import { TfiArrowTopRight } from 'react-icons/tfi';

export default function Template({visible,title,image,pageId}) {

    const [visibility,setvisibility] = useState(visible);

    useEffect(() => {
        setvisibility(visible);
    }, [visible])

    return (
        <div className = {visibility ? "visi" : "hide"}>
            <main className = "temp">
                <img src = {image}/>
                <hgroup>
                    <div>
                        <h2>{title}</h2>
                        <LikeButton pageId={pageId}/>
                    </div>
                    <div className = "jump">
                        <p>作品ページ<TfiArrowTopRight size={18} className = "arr"/></p>
                    </div>
                </hgroup>
            </main>
        </div>
    )
}
