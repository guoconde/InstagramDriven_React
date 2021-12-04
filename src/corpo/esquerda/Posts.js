export default function Posts() {
    const arrInformacoes = [
        {nome: 'meowed', imagem: 'gato-telefone.svg', imagemAlt: 'telefone', curtida: 'respondeai', curtidaAlt: 'respondeai', frase: 'outras 101.523 pessoas'},
        {nome: 'barked', imagem: 'dog.svg', imagemAlt: 'dog', curtida: 'adorable_animals', curtidaAlt: 'animals', frase: 'outras 99.159 pessoas'},
    ]

    
    return (
        <div class="posts">

            {arrInformacoes.map(item => {
                return <Post nome={item.nome}
                         imagem={item.imagem}
                         imagemAlt={item.imagemAlt} 
                         curtida={item.curtida}
                         curtidaAlt={item.curtidaAlt}
                         frase={item.frase} />
            })
            } 
        </div>
    )
}

function AcoesFundo() {
    return(
        <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}

function Post(props) {
    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                <img src={`assets/img/${props.nome}.svg`} alt={props.nome}/>
                {props.nome}
                </div>
                <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={`assets/img/${props.imagem}`} alt={props.imagemAlt}/>
            </div>

            <div class="fundo">
                <AcoesFundo />

                <div class="curtidas">
                <img src={`assets/img/${props.curtida}.svg`} alt={props.curtidaAlt}/>
                <div class="texto">
                    Curtido por <strong>{props.curtida}</strong> e <strong>{props.frase}</strong>
                </div>
                </div>
            </div>
        </div>
    )
}