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
import btn from '../assets/imgs/chevrons-down.svg'

export function Main() {
    return (
        <>

        {/*  CENTRO DA PÁGINA */}
        <div class="standart">
            <section class="hero">
                <header class="hero-content">
                    <span class="destaque marrom"> novidade</span>
                    <h1>Venha fazer sua perfuração com a gente!</h1>
                    <hr />
                    <h2 class="hero-subtitle">Aproveite para colocar seu piercing com o melhor preço e qualidade da região.</h2>
                </header>
                <div class="hero-imagens-container">
                    <figure><img class="img_bigger" src={img01} /></figure>
                    <figure><img src={img02} /></figure>
                    <figure><img src={img03} /></figure>
                    <figure><img src={img04} /></figure>
                    <figure><img class="img_bigger"  src={img05} /></figure>
                    <figure><img src={img06} /></figure>
                    <figure><img class="img_bigger"  src={img07} /></figure>
                    <figure><img src={img08} /></figure>
                    <figure><img class="img_bigger"  src={img09} /></figure>
                    <figure><img src={img10} /></figure>
                    <figure><img class="img_bigger"  src={img11} /></figure>
                    <figure><img src={img12} /></figure>
                </div>
            </section>

            {/* BOTÃO PARA IR PRA BAIXO */}
            {/* <section class="button-container">
                <button type="button">
                    <img src={btn} />
                </button>
            </section> */}

            {/*  PARTE DE BAIXO DA PÁGINA */}
            <section class="clientes">
                <header class="clientes-header">
                    <span class="destaque marrom">receitas</span>
                    <h2 class="clientes-title">Confira as últimas receitas</h2>
                    <p class="clientes-subtitle">De uma olhada nas receitas mais amadas</p>
                </header>

                <div class="clientes-card-container">
                    <div class="clientes-card">
                        <header class="clientes-card-header">
                            <div class="clientes-card-header-details">
                                <span class="destaque amarelo">em alta</span>
                                <h3 class="clientes-title">cappuccino</h3>
                            </div>

                            <p class="clientes-grade">Extraordinario - 4/4</p>
                            
                        </header>
                        <p class="client-description">Uma bebida ideial para os amantes de doce e cremosidade.</p>
                        <div class="client-person">
                            <img src='https://avatars.githubusercontent.com/u/27991210?v=4' />
                            <span class="client-name">André Silveira</span>
                        </div>
                    </div>

                    <div class="clientes-card">
                        <header class="clientes-card-header">
                            <div class="clientes-card-header-details">
                                <span class="destaque amarelo">em alta</span>
                                <h3 class="clientes-title">cappuccino</h3>
                            </div>

                            <p class="clientes-grade">Extraordinario - 4/4</p>
                            
                        </header>
                        <p class="client-description">Uma bebida ideial para os amantes de doce e cremosidade.</p>
                        <div class="client-person">
                            <img src='https://avatars.githubusercontent.com/u/27991210?v=4' />
                            <span class="client-name">André Silveira</span>
                        </div>
                    </div>

                    
                </div>

                

                
            </section>
        </div>
            
            
        </>
    )
}