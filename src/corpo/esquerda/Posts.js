export default function Posts() {
    const arrInformacoes = [
        {nome: 'meowed', eImagem: true, imagem: 'img/gato-telefone.svg', imagemAlt: 'telefone', curtida: 'respondeai', curtidaAlt: 'respondeai', frase: 'outras 101.523 pessoas', titulo: ' Gatinho Fofinho', qtdComentarios: '10.518', tempo: '3', comentarioUm: ' Que fofurinha', comentarioDois: ' Ounttt'},
        {nome: 'barked', eImagem: true, imagem: 'img/dog.svg', imagemAlt: 'dog', curtida: 'adorable_animals', curtidaAlt: 'animals', frase: 'outras 99.159 pessoas', titulo: ' Dog na preguicinha', qtdComentarios: '18.368', tempo: '6', comentarioUm: ' O preguiça boa...', comentarioDois: ' Não aguentou nem chegar na cama! HAHAHA'},
        {nome: 'respondeai', eImagem: false, imagem: 'img/dog.svg', imagemAlt: 'dog', curtida: 'adorable_animals', curtidaAlt: 'animals', frase: 'outras 35.159 pessoas', titulo: ' Sai daqui Pato!', qtdComentarios: '58', tempo: '8', comentarioUm: ' Que tonto, não é um pato', comentarioDois: ' HAHAHA ele nao queria ninguem sujando a pedra dele'},
    ]

    return (
        <div class="posts">

            {arrInformacoes.map(item => {
                return <Post nome={item.nome}
                         imagem={item.imagem}
                         imagemAlt={item.imagemAlt} 
                         curtida={item.curtida}
                         curtidaAlt={item.curtidaAlt}
                         frase={item.frase}
                         eImagem={item.eImagem}
                         titulo={item.titulo}
                         qtdComentarios={item.qtdComentarios}
                         tempo={item.tempo}
                         comentarioUm={item.comentarioUm}
                         comentarioDois={item.comentarioDois} />
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
                {props.eImagem === true ? 
                <img src={`assets/${props.imagem}`} alt={props.imagemAlt}/> :
                <video loop muted autoPlay>
                    <source src="./assets/video/video.mp4" type="video/mp4" />
                    <source src="./assets/video/video.ogv" type="video/ogv" />
                </video>}
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
            <div class="comentarios-feitos">
                <div class="comentario">
                    <a href="home"><strong>{props.nome}</strong><span>{props.titulo}</span></a>
                </div>
                <a href="home" class="comentario-ver-mais">Ver todos os {props.qtdComentarios} comentários</a>
                <div class="comentario">
                    <a href="home"><strong>sabetudo</strong><span>{props.comentarioUm}</span></a>
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                </div>
                <div class="comentario">
                    <a href="#"><strong>dr.guepardo</strong><span>{props.comentarioDois}</span></a>
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="comentario-tempo">há {props.tempo} horas</div>
            <div class="rodape-separador"></div>
            <div class="rodape-comentarios">
                <a href="#">
                    <ion-icon name="happy-outline"></ion-icon>
                </a>
                <input type="text" placeholder="Adicione um comentário..." />
                <button>Publicar</button>
            </div>
        </div>
    )
}