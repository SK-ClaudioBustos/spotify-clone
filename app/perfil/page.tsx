import { Avatar, Box, Container, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import LabelCustom from "../ui/LabelCustom";

const Page = () => {
  const items = [
    {
      label: "Nombre",
      text: "Claudio"
    },
    {
      label: "Apellido",
      text: "Bustos"
    },
    {
      label: "Tipo de cuenta",
      text: "Premium"
    },
    {
      label: "Contraseña",
      text: "*********"
    },
    {
      label: "Correo Electrónico",
      text: "claudiobustos.sk2000@gmail.com"
    },
  ];
  return (
    <Container>
      <Box sx={{ padding: 10, backgroundColor: "#fff", margin: "20px 0", borderRadius: "5px", display: "flex", justifyContent: "center" }}>
        <Grid container sx={{ maxWidth: "500px" }} spacing={0} rowSpacing={{ xs: 1, sm: 2, md: 6 }}>

          <Grid item xs={12} >
            <Avatar sx={{ bgcolor: grey[500], height: 120, width: 120, marginBottom: "10px" }} alt="Claudio Bustos" src="img/perfil.jpg" />
          </Grid>

          {
            items.map(({ label, text }, key) => (
              <Grid item xs={ label === "Correo Electrónico" ? 12 : 6} key={key}>
                <LabelCustom primary={text} secondary={label} color={ label === "Tipo de cuenta" ? "#ffc600" : "#000"} type={ label === "Contraseña" ? "pass" : "" }/>
              </Grid>
            ))
          }

        </Grid>
      </Box>
    </Container>
  )
}

export default Page