import {Request, Response} from "express";
import { createPlayerService, deletePlayerByIdService, getPlayerByIdService, getPlayerData, updatePlayerByIdService } from "../services/players-service";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerData ();
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await getPlayerByIdService (id);
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
    const bodyContent = req.body;
    const httpResponse = await createPlayerService (bodyContent);
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await deletePlayerByIdService (id);
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyContent: StatisticsModel = req.body;

    const httpResponse = await updatePlayerByIdService (id, bodyContent);
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
};