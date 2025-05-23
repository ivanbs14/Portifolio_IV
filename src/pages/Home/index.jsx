import { Conteiner, Link } from './styles';
import { FaWhatsappSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import { projectsData } from "../../utils/data";

import imgLogo from '../../assets/logo.png';
import imgLogoTwo from '../../assets/Captura de Tela 2023-07-20 às 22.02.22.png';
import imgLogoTree from '../../assets/QRWHITE.png';
import perfilImg from '../../assets/08edit.jpg';

import { ButtonText } from '../../components/ButtonText';
import { Card } from '../../components/Card';
import { ProjctCard } from '../../components/ProjctCard';
import { ProjctCardRight } from '../../components/ProjctCardRight';
import { BoxIcons } from '../../components/BoxIcons';
import { ModalPg } from '../../components/ModalPg';
import { useState } from 'react';
import { MoviePg } from '../../components/MoviePg/index';

let curriculo = "https://drive.google.com/file/d/1jSEwG2-vsEjYcYY95kLhS9BPv2j_R-jb/view?usp=sharing";

export function Home() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleImageClick = (project) => {
        setSelectedCard(project);
        /* console.log(project); */
        setShowModal(true);
    };

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
                                <a href="#sectionTree">SOBRE</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='subscripts'>
                        <h2>ME CONHEÇA ATRAVÉS DESTE PORTIFÓLIO
                            OU BAIXE MEU CURRÍCULO.
                        </h2>

                        <div className='arrows'>
                            <ButtonText 
                                title={"Visualize meu currículo"}
                                aRef={curriculo}
                            />
                        </div>
                    </div>
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

                    <div className='projectView'>
                        {projectsData.map((project, index) => {
                            const isEven = index % 2 === 0;
                            if (isEven) {
                            return (
                                <ProjctCard
                                    key={index}
                                    imgLogo={project.imgLogo}
                                    titleCd={project.titleCd}
                                    subTitleCd={project.subTitleCd}
                                    btnRefGit={project.btnRefGit}
                                    btnRef={project.btnRef}
                                    btnRefTwo={project.btnRefTwo}
                                    openClick={() => handleImageClick(project)}
                                >
                                <BoxIcons {...project.icons} />
                                </ProjctCard>
                            );
                        } else {
                            return (
                                <ProjctCardRight
                                    key={index}
                                    imgLogo={project.imgLogo}
                                    titleCd={project.titleCd}
                                    subTitleCd={project.subTitleCd}
                                    btnRefGit={project.btnRefGit}
                                    btnRef={project.btnRef}
                                    btnRefTwo={project.btnRefTwo}
                                    openClick={() => handleImageClick(project)}
                                >
                                <BoxIcons {...project.icons} />
                                </ProjctCardRight>
                            );
                            }
                        })}
                    </div>

                    {showModal && (
                        <ModalPg
                            openClick={showModal}
                            idClick={selectedCard} 
                            onClose={() => setShowModal(false)} 
                        > <MoviePg propsMovie={selectedCard}/> </ModalPg>
                    )}
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
                            <p className='boxText'>Olá, Sou desenvolvedor de software com experiência sólida em projetos full stack, atuando com tecnologias como React, Next.js, Node.js, NestJS e PostgreSQL. No projeto Hausey, tive a oportunidade de liderar tecnicamente o time, adquirindo experiência em liderança e assumindo a responsabilidade por decisões estratégicas, arquitetura de sistemas e entrega de soluções escaláveis com alta performance. Minha paixão é transformar ideias em experiências digitais intuitivas, otimizando não apenas o código, mas também o impacto do produto final. Tenho um olhar crítico para performance, foco em boas práticas de desenvolvimento e gosto de colaborar com times que buscam excelência técnica e inovação constante. Ao longo da minha trajetória, participei de projetos desafiadores, onde a criatividade, resiliência e aprendizado contínuo foram essenciais. Estou sempre em busca de novos desafios que me permitam crescer como profissional e contribuir de forma significativa.
                            </p>

                            <p className='pTwo'>Experiências:</p>
                            <p className='boxText'>
                                <br/>
                                Hausey Tech Lead | Full Stack Developer, Home office Desde de Outubro de 2024<br/>
                                - Como Tech Lead e Desenvolvedor Full Stack na Hausey, lidero o desenvolvimento de funcionalidades escaláveis utilizando Next.js, NestJS, TypeScript e PostgreSQL. Atuo diretamente na definição da arquitetura do sistema, contribuindo para decisões estratégicas e melhorias contínuas de performance. Coordeno o time técnico no planejamento e entrega de soluções robustas, promovendo boas práticas de desenvolvimento e garantindo a qualidade do código. Com foco em escalabilidade e experiência do usuário, busco alinhar tecnologia e produto para gerar valor real ao negócio.
                                <br/><br/>
                                Desenvolvedor Front-end Bugaboo Studio, Híbrido Desde de Dezembro de 2023<br/>
                                - Responsável pelo desenvolvimento e manutenção de novas funcionalidades no Front-end.<br/>
                                - Tecnologias utilizadas: JavaScript, React, Styled Components, Git. 
                                <br/><br/>
                                Desenvolvedor Front-end Júnior CodeDraw Technology, <br/>Home office Dezembro de 2022 a Dezembro de 2023.<br/>
                                - Projeto Uplitt App, responsável pelo desenvolvimento e manutenção de novas funcionalidades no Front-end.<br/>
                                - Tecnologias utilizadas: JavaScript, Next, Tailwind, React, Styled Components, Git...
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
                                aRef={curriculo}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Conteiner>
    )
}