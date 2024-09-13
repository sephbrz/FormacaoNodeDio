import { listAllTeams } from "../repositories/teams-repository";
import { noContent, ok } from "../utils/http-helper";

export const getTeamData = async () => {
    const data = await listAllTeams();
    let response = null

    if (!data) {
        response = await noContent()
    } else {
        response = await ok(data)
    }

    return response
}