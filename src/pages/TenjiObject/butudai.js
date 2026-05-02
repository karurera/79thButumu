import tenji from '../image/tenji.jpg'
import c1 from '../image/c1.jpg'
import c2 from '../image/c2.jpg'
import c3 from '../image/c3.jpg'
import r1 from '../image/r1.jpeg'
import r2 from '../image/r2.jpeg'
import r3 from '../image/r3.jpeg'
import t1 from '../image/t1.JPG'
import t2 from '../image/t2.jpg'
import t3 from '../image/t3.jpg'
import l1 from '../image/l1.jpeg'
import l2 from '../image/l2.jpeg'
import l3 from '../image/l3.jpeg'
import f1 from '../image/f1.jpg'
import f2 from '../image/f2.jpeg'
import tr1 from '../image/tr3.jpg'
import tr2 from '../image/tr2.jpg'
import tr3 from '../image/tr1.jpg'
import tk1 from '../image/tk1.jpeg'
import tk2 from '../image/tk2.jpg'
import tk3 from '../image/tk3.jpg'
import { Ri24HoursFill } from 'react-icons/ri'

export const TESLA = {
    TITLE: "テスラコイル",
    IMAGE: t1,
    IMG2: t2,
    IMG3: t3,
    LIKE: "tesla",
    MAIN: "テスラコイルは、ニコラ・テスラが発明した共振現象を利用した装置で、一次・二次コイルの共振現象を利用して高周波高電圧を発生させます。ニコラ・テスラはテスラコイルを利用した無線送電を構想していたようですが、後に非効率と分かり、主に放電を発生させるために使われるようになりました。この放電は20センチ以上の長さがありとても派手なのでぜひ見にきて下さい。",
    JUMP: 1,
}

export const LED = {
    TITLE: "LEDキューブ",
    IMAGE: l1,
    IMG2: l2,
    IMG3: l3,
    LIKE: "led",
    MAIN: "(本文)",
    JUMP: 2,
}

export const CPU = {
    TITLE: "自作CPU",
    IMAGE: c1,
    IMG2: c2,
    IMG3: c3,
    LIKE: "cpu",
    MAIN: "ロジックICのみで制作した8bitCPUです。この展示の魅力はなんと言っても手作業の配線です。プリント基板は使用していません。書き込むプログラムや接続する機器次第で様々なことができます。今回の展示ではテンキーを接続し、四則演算ができる電卓のプログラムを書き込んで展示しています。",
    JUMP: 3,
}

export const FLY = {
    TITLE: "ドローン",
    IMAGE: f1,
    IMG2: f2,
    IMG3: f3,
    LIKE: "fly",
    MAIN: "「4つプロペラを同じ強さで回せば飛ぶんでしょ」などど思ってる人は今日で終わりにしましょう。４枚のプロペラとモーターの「轟」を感じていただけたらと思います。",
    JUMP: 4,
}

export const ROBOT = {
    TITLE: "四脚ロボ",
    IMAGE: r1,
    IMG2: r2,
    IMG3: r3,
    LIKE: "sl",
    MAIN: "無線で動作する放射状4脚型ロボットです。足を動かすことで歩行、旋回やエモートが可能となっており、また本体からはレーザーを発振することも可能で、レーザーの発振用の基部は旋回させることが可能です。操作はpc経由でbluetoothを通じて行います。",
    JUMP: 5,
}

export const PAINT = {
    TITLE: "お絵かきロボット",
    IMAGE: tenji,
    IMG2: tenji,
    IMG3: tenji,
    LIKE: "paint",
    MAIN: "去年作ったお絵かきロボットを進化させ、文字を書けるようにしました。メインの制御基板はラズパイで、去年より高性能なステッピングモーターでペンを動かしています。改善点として、今年はモーターを固定できる機構にしたので、ペンのブレが極端に少なくなりました。",
    JUMP: 6,
}

export const CAR = {
    TITLE: "トランスフォーマー",
    IMAGE: tr1,
    IMG2: tr2,
    IMG3: tr3,
    LIKE: "car",
    MAIN: "(本文)",
    JUMP: 7,
}

export const TIKA = {
    TITLE: "チカチカ(体験展示)",
    IMAGE: tk1,
    IMG2: tk2,
    IMG3: tk3,
    LIKE: "tikatika",
    MAIN: "物理部展では、チカチカという物を作る電子工作体験を行っています。部員による丁寧な説明によって、はんだごてを使って部品を接着し、赤と緑のLEDが交互に光る物を作り、電池付きで持ち帰れます。部品をつける板は1枚1枚部員の手で作られています。所要時間は15分ほどです。是非ご体験を！",
    JUMP: 13,
}