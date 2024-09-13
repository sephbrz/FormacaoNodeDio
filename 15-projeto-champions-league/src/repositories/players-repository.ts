import { PlayerModel } from "../models/player-model";
import fs from "fs";
import path from "path";
import { StatisticsModel } from "../models/statistics-model";


const pathData = path.join(__dirname, "./players-data.json");
const rawData = fs.readFileSync(pathData, "utf-8");
const database: PlayerModel[] = JSON.parse(rawData);


export const listAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayersById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
    fs.writeFileSync(pathData,JSON.stringify(database),{encoding:'utf8',flag:'w'})
}

export const deletePlayer = async (id: number) => {
    const index = database.findIndex(p => p.id === id)
    
    if (index !== -1) {
        database.splice(index, 1);
        fs.writeFileSync(pathData,JSON.stringify(database),{encoding:'utf8',flag:'w'})
        return true
    } 
    return false
}

export const updatePlayer = async (id: number, statistics: StatisticsModel) => {
    const index = database.findIndex(p => p.id === id)
    
    if (index !== -1) {
        database[index].statistics = statistics;
        fs.writeFileSync(pathData,JSON.stringify(database),{encoding:'utf8',flag:'w'});
        return database[index];
    } 
}