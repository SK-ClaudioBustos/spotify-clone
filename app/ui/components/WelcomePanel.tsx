import { Container, Typography } from "@mui/material"
import wpStyle from "../utils/styles/welcomePanel"

const WelcomePanel = () => {
  return (
    <Container sx={wpStyle.container}>
      <div>
        <Typography sx={wpStyle.title} fontSize={50}>
          Bienvenido a mi tercer proyecto
        </Typography>
        <Typography sx={wpStyle.body} fontSize={15}>
          Se trata de un proyecto que busca simular ser una pagina web para reproducir musica
        </Typography>
      </div>
    </Container>
  )
}

export default WelcomePanel