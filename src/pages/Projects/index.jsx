import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { Container, MainPrjects, Title, ProjectCard, Apresented, TechProject } from "./styles"
import CardProject from "../../components/CardProject"

import conversorImg from "../../assets/conversor.png"
import sorteadorImg from "../../assets/sorteador.png"
import tattooImg from "../../assets/ink-site-tattoo.png"
import jokenPoImg from "../../assets/joken-po.png"
import galeryImg from "../../assets/galeria.png"
import userRegistrationImg from "../../assets/cadastro-usuarios.png"

import projectsData from "./projects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const brandColors = {
  'html5': '#E34F26',
  'css3-alt': '#1572B6',
  'square-js': '#F7DF1E',
  'react': '#00BFFF',
  'node-js': '#32CD32'
}

function Projects() {
  const navigate = useNavigate()

  const projects = projectsData.map(project => ({
    ...project,
    image: project.image === "conversorImg" ? conversorImg :
           project.image === "sorteadorImg" ? sorteadorImg :
           project.image === "tattooImg" ? tattooImg :
           project.image === "jokenPoImg" ? jokenPoImg :
           project.image === "userRegistrationImg" ? userRegistrationImg :
           project.image === "galeryImg" ? galeryImg : null
  }))

  const updateProjects = projects.filter(project => project.id)

  return (
    <Container>
      <Title>
        <h1>My Projects</h1>
        <Button type="button" onClick={() => navigate("/")}>Home</Button>
      </Title>
      <MainPrjects>
        {updateProjects.map(project => (
          <CardProject key={project.id}>
            <ProjectCard>
              <h3>
                {project.title}
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">vew project</a>
                  )} 
                </h3>
              <Apresented>
                <img src={project.image} alt="image-project" />
                <TechProject>
                  {project.technologies.map((icon, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={icon}
                      size="2x"
                      color={brandColors[icon.iconName] || "#ddd"}
                      style={{ margin: "6px" }}
                    />
                  ))}
                </TechProject>
              </Apresented>
            </ProjectCard>
          </CardProject>
        ))}
      </MainPrjects>

    </Container>
  )
}

export default Projects