import { LoadComicById, LoadComicByIdDTO } from '../../domain/usecases/load-comic-by-id'
import { HttpClient, HttpStatusCode } from '../protocols/http/http-client'
import { MarvelHttpResponse } from '../protocols/http/marvel-http-response'

export class RemoteLoadComicById implements LoadComicById {
  constructor (
    private readonly httpClient: HttpClient<MarvelHttpResponse<LoadComicById.Model[]>>
  ) {}

  async execute (params?: LoadComicByIdDTO): Promise<LoadComicById.Model> {
    const httpResponse = await this.httpClient.request({
      url: '/comics',
      method: 'get',
      params: params
    })

    if (httpResponse.statusCode !== HttpStatusCode.ok) {
      throw new Error(`Unexpected status code - ERROR ${httpResponse.statusCode}`)
    }

    const comicData: any = httpResponse.body.data.results[0]

    if (!comicData) {
      throw new Error('Comic not found')
    }

    return {
      id: comicData.id,
      title: comicData.title,
      cover: comicData.thumbnail.path + '.' + comicData.thumbnail.extension,
      publishedAt: comicData.dates[0].date,
      writer: comicData.creators.items.find(creator => creator.role === 'writer')?.name ?? 'Unknown',
      penciler: comicData.creators.items.find(creator => creator.role === 'penciler')?.name ?? 'Unknown',
      coverArtist: comicData.creators.items.find(creator => creator.role === 'penciler')?.name ?? 'Unknown',
      description: comicData.description,
      comics: []
    }
  }
}
