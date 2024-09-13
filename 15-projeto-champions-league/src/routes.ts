import {Router} from "express";
import { deletePlayer, getPlayer, getPlayerById, postPlayer, updatePlayer } from "./controllers/player-controllers";
import { getTeam } from "./controllers/team-controllers";

const router = Router();

router.get("/players", getPlayer);
router.get("/players/:id", getPlayerById);
router.post("/players", postPlayer);
router.delete("/players/:id", deletePlayer);
router.patch("/players/:id", updatePlayer);

router.get("/teams", getTeam);

export default router;