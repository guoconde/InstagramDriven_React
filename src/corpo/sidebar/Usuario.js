export default function Usuario() {
    return (
        <UsuarioLogado nome="catanacomics" alt="comics" apelido="Catana" />
    )
}

function UsuarioLogado(props) {
    return (
        <div class="usuario">
            <img src={`assets/img/${props.nome}.svg`} alt={props.alt}/>
            <div class="texto">
            <strong>{props.nome}</strong>
            {props.apelido}
            </div>
        </div>
    )
}