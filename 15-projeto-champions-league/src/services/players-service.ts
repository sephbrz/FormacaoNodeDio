import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import { deletePlayer, findPlayersById, insertPlayer, listAllPlayers, updatePlayer } from "../repositories/players-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";

export const getPlayerData = async () => {
    const data = await listAllPlayers();
    let response = null

    if (!data) {
        response = await noContent()
    } else {
        response = await ok(data)
    }

    return response
}

export const getPlayerByIdService = async (id: number) => {
    const data = await findPlayersById(id);
    let response = null

    if (!data) {
        response = await noContent()
    } else {
        response = await ok(data)
    }

    return response
}

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;

    if (Object.keys(player).length !== 0) {
        await insertPlayer(player);
        response = created()
    } else {
        response = await badRequest()
    }

    return response
}

export const deletePlayerByIdService = async (id: number) => {
    let response = null;

    const success = await deletePlayer(id);

    if (success) {
        response = await ok({message: "deleted"});
    } else {
        response = await badRequest();
    }
    return response
}

export const updatePlayerByIdService = async (id: number, statistics: StatisticsModel) => {
    let response = null;
    const data = await updatePlayer(id, statistics);

    if (Object.keys(data).length === 0) {
        response = await badRequest();
      } else {
        response = await ok(data);
      }

    return response
}