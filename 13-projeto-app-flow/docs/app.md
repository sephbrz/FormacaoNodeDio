# Podcast Manager

### Descrição

App ao estilo Netflix, para organizar episodios de podcast por categoria

### Dominio

Podcasts em video

### Features

- Listar episodios em categorias
    - Ex. Saude, fitness, mentalidade, etc...
- Filtrar por nome do podcast

## Como

#### Feature

### Como implementar
 Retornar via API rest o nome do podcast, nome do episódio, imagem de capa, link e categorias

 ``` js
[
    {
        podcastName: "flow",
        episode: "LUCIO MARIO FILHO",
        videoId: "16ItO8XPrXY",
        cover: "https://i.ytimg.com/vi/16ItO8XPrXY/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=16ItO8XPrXY",
        categories ["televisao"]
    },
    {
        podcastName: "flow",
        episode: "[MEDALHISTA OLÍMPICO 🥈] ISAQUIAS QUEIROZ",
        videoId "7BZkp3qaRu8",
        cover: "https://i.ytimg.com/vi/7BZkp3qaRu8/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=7BZkp3qaRu8",
        categories ["esportes", "olimpiada"]
    }
]
 ```