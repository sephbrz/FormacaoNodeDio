import { podecastRepository } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (podcastName:string | undefined):Promise<PodcastTransferModel> => {
    let response: PodcastTransferModel = {
        statusCode: 0,
        body: []
    };

    const queryString = podcastName?.split("?p=")[1] ?? "";
    const data = await podecastRepository(queryString);

    response.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent
    response.body = data

    return response;
};