import fs from "fs";
import path from "path";
import { TeamModel } from "../models/team-model";


const pathData = path.join(__dirname, "./teams-data.json");
const rawData = fs.readFileSync(pathData, "utf-8");
const database: TeamModel[] = JSON.parse(rawData);


export const listAllTeams = async (): Promise<TeamModel[]> => {
    return database;
}