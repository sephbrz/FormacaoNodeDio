import {Request, Response} from "express";
import { getTeamData } from "../services/teams-service";


export const getTeam = async (req: Request, res: Response) => {
    const httpResponse = await getTeamData ();
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
};