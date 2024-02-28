import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

export function ArticleList() {
  const newsletterArticles = [
    {
      id: 1,
      title: 'Novas descobertas sobre a cura do câncer',
      author: 'Dr. João Silva',
      publicationDate: '2024-02-28',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      tags: ['saúde', 'medicina', 'pesquisa'],
    },
    {
      id: 2,
      title: 'As últimas tendências em tecnologia de inteligência artificial',
      author: 'Maria Santos',
      publicationDate: '2024-02-27',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      tags: ['tecnologia', 'IA', 'inovação'],
    },
    {
      id: 3,
      title: 'Dicas para uma alimentação saudável',
      author: 'Nutricionista Ana Oliveira',
      publicationDate: '2024-02-26',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      tags: ['saúde', 'nutrição', 'bem-estar'],
    },
    {
      id: 4,
      title: 'Dicas para uma alimentação saudável',
      author: 'Nutricionista Ana Oliveira',
      publicationDate: '2024-02-26',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      tags: ['saúde', 'nutrição', 'bem-estar'],
    },
  ]
  return (
    /* esta dizendo que ele é um grid e que apartir de sm ele tera duas colunas 
    e quando atigir o sm ele terá 3 colunas o m-auto esta deixando o conteudo centralizado
    pois ele ira dar um margem automaticamente, isso é influenciado por conta da 
    largura do elemento que ´´e de 2xl o seu máximo 
    */
    <div className="mt-5 sm:mt-0 grid gap-5 m-auto max-w-5xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl">
      {newsletterArticles.map((articles) => (
        <Card
          key={articles.id}
          className="bg-gray-300 dark:bg-dark-200 shadow-xl"
        >
          <CardHeader>
            <CardTitle>{articles.title}</CardTitle>
            <CardDescription>{articles.content}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{articles.tags}</p>
          </CardContent>
          <CardFooter>
            <p>lorem ipsum dolor sit amet, con</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
