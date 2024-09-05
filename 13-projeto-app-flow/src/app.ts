import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller';
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";


export const app = 
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        
        const baseURL = req.url?.split("?")[0];
        
        if (req.method === HttpMethod.GET && baseURL === Routes.LIST) {
            await getListEpisodes(req, res);
        }

        if (req.method === HttpMethod.GET && baseURL === Routes.EPISODE) {
            await getFilterEpisodes(req, res);
        }
    };
