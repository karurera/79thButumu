import tenji from '../image/tenji.jpg'
import v1 from '../image/quest2.jpg'
import v2 from '../image/v1.PNG'
import v3 from '../image/v2.PNG'
import a1 from '../image/a1.JPG'
import a2 from '../image/a2.JPG'
import a3 from '../image/a3.JPG'
import i1 from '../image/i1.JPG'
import i2 from '../image/i2.jpg'
import i3 from '../image/i3.jpg'
import s1 from '../image/s1.JPG'
import s2 from '../image/s2.JPG'
import s3 from '../image/s3.JPG'
import m1 from '../image/m1game.jpg'
import m2 from '../image/m2.PNG'
import m3 from '../image/m3.jpg'

export const VR = {
    TITLE: "VRゲーム",
    IMAGE: v1,
    IMG2: v2,
    IMG3: v3,
    LIKE: "vr",
    MAIN: "VRとは、視覚情報を用いて現実にない物事をまるでそこにあるかのように示すことです。ゲームは目の前からノーツが流れて来て、それをコントローラーを振って切る「ビートセーバー」と実際の歩行が反映されるアバター開発をし、それで相手を倒す「FPSゲーム」があります。VRでのゲームは新鮮な体験になると思うので、是非一度来てみてください！",
    JUMP: 8,
}

export const SOUND = {
    TITLE: "音ゲー",
    IMAGE: s1,
    IMG2: s2,
    IMG3: s3,
    LIKE: "sound",
    MAIN: "アーケードのリズムゲームです。指のタッチに反応するスライダーで操作、プレイします。3年前の製作を再現しました。ゲームはUnityで制作しました。タッチセンサーはMPR121というものを使い、Arduinoのシリアル通信でUnityに情報を送るという仕組みでタッチ操作を実現しています。",
    JUMP: 9,
}

export const IRAIRA = {
    TITLE: "イライラ棒",
    IMAGE: i1,
    IMG2: i2,
    IMG3: i3,
    LIKE: "iraira",
    MAIN: "イライラ棒はアルミの道を通り抜けてスタートからゴールまで目指すゲームです。アルミの道に当たってしまうと放電が起き、火花がでます。様々なギミックを乗り越えてアルミに当てないようにゴールを目指せ！",
    JUMP: 10,
}

export const M1 = {
    TITLE: "中1ゲー",
    IMAGE: m1,
    IMG2: m2,
    IMG3: m3,
    LIKE: "m1",
    MAIN: "中1ゲーとは、4月に中2になった物無員達が中1の頃から製作している自作ゲームです。中1ゲーはパソコンで製作している他に似たゲームではなく、物理的に導線をICと繋いでいくつかのLEDを画面としたゲームです。中1ゲーには、マルバツゲーム、タイミング良くボタンを押すゲーム、更にはフラッピーバード等、様々なゲームがあります。そんな中1が努力して製作したゲーム、ぜひごらんください！",
    JUMP: 11,
}

export const AIR = {
    TITLE: "エアホッケー",
    IMAGE: a1,
    IMG2: a2,
    IMG3: a3,
    LIKE: "air",
    MAIN: "中2部員が作ったゲームセンターにあるようなエアホッケーです。空気が木にあいている小さな穴から出てきて摩擦を減らし、玉も本体も木だけで作られており、よく滑ります。玉は1個ずつスロープを伝って出てきます。プログラミングとレーザーによって自動で点数が加算され、画面に表示されます。8ポイントを取ったら勝利です。是非333教室で遊びましょう！",
    JUMP: 12,
}