import { AiOutlineX } from "react-icons/ai"
import { TfiArrowTopRight } from "react-icons/tfi"
import './footer.css'
import { useState } from "react"

export default function Footer() {

    const [plus1, setplus1] = useState(false)
    
    const [plus2, setplus2] = useState(false)

    const clplus1 = () => {
        setplus1(!plus1);
    }
    
    const clplus2 = () => {
        setplus2(!plus2);
    }

    const x = () => {
        window.location.href = "https://x.com/butumubutumu";
    }

  return (
    <div>
      <footer>
            <nav>
                <p>(サイトマップ)</p>
                <ul>
                    <li className ={plus1 ? "actplus1" : ""} onClick={clplus1}>
                        <h3>Room 301</h3>
                        <p>(301教室)</p>
                        <ul>
                            <li>(テスラコイル)</li>
                            <li>(LEDキューブ)</li>
                            <li>(自作CPU)</li>
                            <li>(ドローン)</li>
                            <li>(蒸気機関)</li>
                            <li>(お絵かきロボット)</li>
                            <li>(トランスフォーマー)</li>
                            <li>(チカチカ)</li>
                        </ul>
                        <div>
                            <div className = "plus1"/>
                            <div className = "plus2"/>
                        </div>
                    </li>
                    <li className ={plus2 ? "actplus2" : ""} onClick={clplus2}>
                        <h3>Room 302</h3>
                        <p>(302教室)</p>
                        <ul>
                            <li>(VRゲーム)</li>
                            <li>(音ゲー)</li>
                            <li>(イライラ棒)</li>
                            <li>(自作ゲーム)</li>
                            <li>(エアホッケー)</li>
                        </ul>
                        <div>
                            <div className = "plus1"/>
                            <div className = "plus2"/>
                        </div>
                    </li>
                    <li>
                        <h3>About</h3>
                        <p>(物理部展とは)</p>
                        <TfiArrowTopRight size={25} className = "arrow"/>
                    </li>
                    <li>
                        <h3>Activity</h3>
                        <p>(活動)</p>
                        <TfiArrowTopRight size={25} className = "arrow"/>
                    </li>
                </ul>
            </nav>
            <div className = "xlink" onClick={x}>
                <AiOutlineX size={24} color={"#ddd"} className = "xIcon"/>
            </div>
            <h2 className = "endTitle">物理部展</h2>
        </footer>
    </div>
  )
}
