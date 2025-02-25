import img01 from '../assets/imgs/img_01.jpeg'
import img02 from '../assets/imgs/img_02.jpeg'
import img03 from '../assets/imgs/img_03.jpeg'
import img04 from '../assets/imgs/img_04.jpeg'
import img05 from '../assets/imgs/img_05.jpeg'
import img06 from '../assets/imgs/img_06.jpeg'
import img07 from '../assets/imgs/img_07.jpeg'
import img08 from '../assets/imgs/img_08.jpeg'
import img09 from '../assets/imgs/img_09.jpeg'
import img10 from '../assets/imgs/img_10.jpeg'
import img11 from '../assets/imgs/img_11.jpeg'
import img12 from '../assets/imgs/img_12.jpeg'
import btn from '../assets/imgs/Button.svg'

export function Main() {
    return (
        <>
            <section>
                <header>
                    <span>novidade</span>
                    <h1>Venha fazer sua perfuração com a gente!</h1>
                    <hr />
                    <h2>Aproveite para colocar seu piercing com o melhor preço e qualidade da região.</h2>
                </header>
                <div>
                    <figure><img src={img01} /></figure>
                    <figure><img src={img02} /></figure>
                    <figure><img src={img03} /></figure>
                    <figure><img src={img04} /></figure>
                    <figure><img src={img05} /></figure>
                    <figure><img src={img06} /></figure>
                    <figure><img src={img07} /></figure>
                    <figure><img src={img08} /></figure>
                    <figure><img src={img09} /></figure>
                    <figure><img src={img10} /></figure>
                    <figure><img src={img11} /></figure>
                    <figure><img src={img12} /></figure>
                </div>
            </section>
            <section>
                <button>
                    <img src={btn} />
                </button>
            </section>
            
        </>
    )
}