import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useMediaQuery } from '@mui/material';
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import { useState } from "react";
import LabelCustom from "../utils/LabelCustom";
import lrStyle from '../utils/styles/listaReproduccion';
import { color2 } from '../utils/styles/colors';
interface IListaReproduccionProps {
    nombre: string
    imagen: string
    starred: boolean
    descripcion?: string
}

const ListaReproduccion = (props: IListaReproduccionProps) => {
    const { nombre, imagen, starred, descripcion } = props;
    const matches = useMediaQuery('(max-width:600px)');
    const [star, setStar] = useState(starred);
    const iconsStyle = { fontSize: matches ? "4vw" : "1.6rem" };
    return (
        <Grid item xs={12} sx={lrStyle.item}>
            <Grid container>
                <Grid item md={2} sm={3} xs={4} sx={lrStyle.containerImage}>
                    <Image src={imagen} width={matches ? 90 : 120} height={matches ? 90 : 120} priority alt="portada lista de reproducion" />
                </Grid>
                <Grid item md={10} sm={9} xs={8} sx={{ display: "flex", alignItems: "center" }}>
                    <Grid container>
                        <Grid item md={10} sm={8} xs={12} sx={lrStyle.containerText}>
                            <LabelCustom
                                primary={nombre}
                                secondary={descripcion as string}
                                colorP={color2}
                                colorS="#1E9467"
                                altern={true}
                                fs1={matches ? "3vw" : null}
                                fs2={matches ? "3vw" : null}
                            />
                        </Grid>
                        <Grid item md={2} sm={4} xs={12} sx={{ ...lrStyle.containerText, justifyContent: matches ? "end" : "normal" }}>
                            <IconButton>
                                <Tooltip title="Reproducir lista de reproducción">
                                    <PlayArrowIcon color="action" sx={iconsStyle} />
                                </Tooltip>
                            </IconButton>
                            <IconButton>
                                <Tooltip title="Eliminar lista de reproducción">
                                    <DeleteIcon color="error" sx={iconsStyle} />
                                </Tooltip>
                            </IconButton>
                            <IconButton onClick={() => setStar(!star)}>
                                <Tooltip title={star ? "Desmarcar como favorita" : "Marcar como favorita"}>
                                    {
                                        star
                                            ? <StarIcon color="success" sx={iconsStyle} />
                                            : <StarBorderIcon color="success" sx={iconsStyle} />

                                    }
                                </Tooltip>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default ListaReproduccion