import { Conteiner, Link } from './styles';
import { FaWhatsappSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import imgLogo from '../../assets/logo.png';
import imgLogoTwo from '../../assets/Captura de Tela 2023-07-20 às 22.02.22.png';
import imgLogoTree from '../../assets/QRWHITE.png';
import imgIfood from '../../assets/foodexplorer.png';
import imgMovie from '../../assets/notmovie.png';
import imgNotpad from '../../assets/notpad.png';
import perfilImg from '../../assets/08edit.jpg';

import { ButtonText } from '../../components/ButtonText';
import { Card } from '../../components/Card';
import { ProjctCard } from '../../components/ProjctCard';
import { ProjctCardRight } from '../../components/ProjctCardRight';
import { BoxIcons } from '../../components/BoxIcons';

export function Home() {

    return(
        <Conteiner>
            <div className="homePage">
                <div id="sectionOne" className="section">
                    <div className='sectionImg'></div>
                    <nav className='navigation'>
                        <Card 
                            imgLogo={imgLogo} 
                            title={"IVAN BARBOSA"}
                            subTitle={"Desenvolvedor de Software"}
                        />
                        <ul>
                            <li>
                                <a href="#sectionTwo">PROJETOS</a>
                            </li>
                            <li>
                                <a href="#sectionTree">SOBRE MIM</a>
                            </li>
                        </ul>
                    </nav>
                
                    <h2>ME CONHEÇA ATRAVÉS DESTE PORTIFÓLIO<br/>
                        OU BAIXE MEU CURRÍCULO.
                    </h2>

                    <ButtonText 
                        title={"Visualize o currículo"}
                        aRef={"https://drive.google.com/file/d/1gol3c9DC0vc4c6lottdLEYaEBDpjC8vw/view?usp=sharing"}
                    />
                </div>

                <div id="sectionTwo" className="section">
                    <div className='cabecalho'>
                        <h2>MEUS PROJETOS</h2>
                        <Card
                            imgLogo={imgLogoTwo} 
                            title={"IVAN"}
                            subTitle={"Desenvolvedor de Software"}
                        />

                    </div>

                    <ProjctCard
                        imgLogo={imgIfood}
                        titleCd={"FOOD EXPLORER"}
                        subTitleCd={"API RESTFULL. O food explorer, é um menu interativo para um restaurante. O admin é o responsável, logo poderá criar, visualizar, editar e apagar. Os usuários irão visualizar todos os pratos cadastrados e poderão acrescentar a um pedido."}
                        btnRefGit={"https://github.com/ivanbs14/FoodExplore_Front.git"}
                        btnRef={"https://foofexploreriv.netlify.app/"}
                    >
                        <BoxIcons/>
                    </ProjctCard>
                    
                    <ProjctCardRight
                        imgLogo={imgMovie}
                        titleCd={"ROCKETMOVIES"}
                        subTitleCd={"API RESTFULL. Onde após criar um cadastro e fazer Login. O usuário vai cadastrar o filme que assistiu, classificar de 0 a 5, criar um breve resumo e atribuir os gêneros."}
                        btnRefGit={"https://github.com/ivanbs14/RocketMOvies_Front-End.git"}
                        btnRef={"https://notemovies.netlify.app/"}
                    >
                        <BoxIcons/>
                    </ProjctCardRight>

                    <ProjctCard
                        imgLogo={imgNotpad}
                        titleCd={"NOTPAD"}
                        subTitleCd={"API RESTFULL. Onde após criar um cadastro e fazer Login. O usuário vai cadastrar o filme que assistiu, classificar de 0 a 5, criar um breve resumo e atribuir os gêneros."}
                        btnRefGit={"https://github.com/ivanbs14/NotPad_Front.git"}
                        btnRef={"https://notepadss.netlify.app/"}
                    >
                        <BoxIcons/>
                    </ProjctCard>
                    
                </div>

                <div id="sectionTree" className="section">
                    <div className='cabecalhoTree'>
                        <h2>PERFIL</h2>
                        <Card
                            imgLogo={imgLogoTree} 
                            title={"IVAN"}
                            subTitle={"Desenvolvedor de Software"}
                        />
                        
                    </div>
                    <div id='sobreM'>
                        <img className='perfil' src={perfilImg} alt="Imagem de um homem" />
                        <div id='descrtP'>
                            <h3>Ivan Barbosa</h3>
                            <p>Olá, me chamo Ivan e sou desenvolvedor de software jr desde 2022.<br/>
                                Possuo habilidades fullstack, Mas meu forte é desenvolvimento front-end.<br/>
                                - Graduando em Análise e Desenvolvimento de Sistemas.<br/>
                                - Especialização Fullstack Explorer na Instituição. <a href="https://www.rocketseat.com.br/explorer">RockectSeat</a>.<br/>
                                Trabalhando para sempre obter experiência nas skills que possuo: <br/>
                                - ReactJs.<br/>
                                - Javascript <br/>
                                - Node.js<br/>
                                - SQL <br/>
                                E intensificando as minhas habilidades comportamentais como: organização, criatividade, raciocínio 
                                e dinamismo.
                            </p>
                            
                            <p className='pTwo'>Contatos:</p>

                            <div id='socialM'>
                                <Link href="https://www.linkedin.com/in/ivan-barbosa-653a29192/">
                                        <FaLinkedin />
                                </Link>
                                <Link href="https://github.com/ivanbs14">
                                        <FaGithubSquare />
                                </Link>
                                <Link href="https://api.whatsapp.com/send?phone=5585999246230&text=Ol%C3%A1,%20te%20retornarei%20o%20mais%20r%C3%A1pido%20poss%C3%ADvel.%0AObrigado%20pela%20aten%C3%A7%C3%A3o.">
                                        <FaWhatsappSquare />
                                </Link>
                                <Link id='email' href="mailto:ivanbarbosag@gmail.com">
                                        <MdEmail />
                                </Link>
                            </div>

                            <ButtonText 
                                title={"Visualize o meu currículo"}
                                aRef={"https://drive.google.com/file/d/1gol3c9DC0vc4c6lottdLEYaEBDpjC8vw/view?usp=sharing"}
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
        </Conteiner>
    )
}