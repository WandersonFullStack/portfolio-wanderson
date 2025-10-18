import CardMain from "../../components/CardMain"
import { Container, Title, Main, Section, Contacts, Technologies, AvatarUser, Content } from "./styles"
// import ImagePersona from '../../assets/react.svg'
import Button from "../../components/Button"
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'


function Home() {

    library.add(fab)

    const navigate = useNavigate()

    return (
        <Container>
            <Title>
                {/* <img src={ImagePersona} alt="image-persona" /> */}
                <AvatarUser src='https://avatar.iran.liara.run/public/boy' alt="avatar-user" />
                <h1>Hello, I'am Wanderson Magalhães</h1>
            </Title>
            <Main>
                <Section>
                    <CardMain>
                        <Technologies>
                            <FontAwesomeIcon icon="fa-brands fa-html5" size="4x" color="#FF4500" />
                            <FontAwesomeIcon icon="fa-brands fa-css3-alt" size="4x" color="#0000FF" />
                            <FontAwesomeIcon icon="fa-brands fa-square-js" size="4x" color="#FFD700" />
                            <FontAwesomeIcon icon="fa-brands fa-node-js" size="4x" color="#32CD32" />
                            <FontAwesomeIcon icon="fa-brands fa-react" size="4x" color="#00BFFF" />
                        </Technologies>
                    </CardMain>
                    <CardMain>
                        <Contacts>
                            <a href="https://github.com/WandersonFullStack" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" size="4x" /></a>
                            <a href="https://www.linkedin.com/in/wanderson-magalhaes/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-square-linkedin" size="4x" /></a>
                            <a href="https://wa.link/e40gea" target="_blank"><FontAwesomeIcon icon="fa-brands fa-whatsapp" size="4x" /></a>
                        </Contacts>
                    </CardMain>
                </Section>
                <Section>
                    <Content>
                        <h2>About me :</h2>
                        <p>
                            I'm a beginner full-stack developer with a passion for technology and innovation.
                            With expertise in languages ​like JavaScript, HTML, CSS, and frameworks like React and Node.js,
                            I'm always looking to learn and grow in the software development field.

                            My journey began with a strong interest in solving problems and creating solutions that improve the user experience.
                            I recently completed projects that helped me strengthen my skills and better understand the
                            application development lifecycle.

                            Besides programming, I'm enthusiastic about collaborative work and effective team communication,
                            always open to feedback and willing to share knowledge. I'm seeking opportunities to
                            apply my skills to challenging projects and contribute to dynamic teams.
                        </p>
                    </Content>
                    <div style={{ display:'flex', justifyContent:'center' }}>
                        <Button type='button' onClick={() => navigate('/projects')}>View Projects</Button>
                    </div>
                </Section>
            </Main>
        </Container>
    )
}

export default Home