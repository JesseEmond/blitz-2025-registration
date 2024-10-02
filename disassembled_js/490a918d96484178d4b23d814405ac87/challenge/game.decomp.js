function func_unknown()
{
    r0 = func_unknown_00000373AE11DD69
    return func_unknown_00000373AE11DD69
}
function func_unknown_00000373AE11DD69(a0, a1, a2, a3, a4)
{
    r1 = Scope[0]
    Scope[1][2] = null
    Scope[1][3] = null
    Scope[1][4] = null
    Scope[1][5] = null
    Scope[1][6] = null
    Scope[1][7] = null
    r6 = new {"value": true}
    r4 = a0
    ACCU = "Object"["defineProperty"](r4, "__esModule", r6)
    a0["Blitz2025Challenge"] = undefined
    Scope[1][2] = a1("@blitz/engine")
    Scope[1][3] = a1("./actions/action")
    Scope[1][4] = a1("./error")
    Scope[1][5] = a1("./maps/map_loader")
    Scope[1][6] = a1("./random")
    Scope[1][7] = a1("./world")
    r2 = Scope[1]
    Scope[2][2] = null
    r4 = DefineClass([17, DescriptorArray[5], NumberDictionary[7], [], DescriptorArray[14], NumberDictionary[7], []], func_Blitz2025Challenge_00000373AE11E6F9, null, func_loadMap_00000373AE11ECC1, func_registerTeam_00000373AE11EEE1, func_setup_00000373AE11F019, func_playOneTick_00000373AE11F2B1, func_fetchAndApplyPlayerCommands_00000373AE11F831, func_applyActions_00000373AE11FF91, func_isGameComplete_00000373AE1204F9, func_getGameResults_00000373AE1209D1, func_updateGame_00000373AE120C79, func_addStatsForTeam_00000373AE120DC1, func_serializeConstants_00000373AE120EA1, func_serializeForTeam_00000373AE120F81, func_serializeForViewer_00000373AE121279, func_serializeCommon_00000373AE121509)
    Scope[2][2] = func_Blitz2025Challenge_00000373AE11E6F9
    a0["Blitz2025Challenge"] = Scope[1]
    r3 = new {"RANDOM_SEED": null, "TICK_COUNT": 2000, "RESPAWN_COOLDOWN_TICKS": 10, "CHEAT_DO_NOT_OBFUSCATE_TEAM_IDS": false}
    r3["RANDOM_SEED"] = "Math"["random"]()
    Scope[1]["DEFAULT_GAME_OPTIONS"] = r3
    return undefined
}
function func_serializeCommon_00000373AE121509()
{
    r0 = new {"constants": null, "currentTickNumber": null, "tick": null}
    r1 = this["serializeConstants"]
    r0["constants"] = r1()
    r0["currentTickNumber"] = this["currentTickNumber"]
    r0["tick"] = this["currentTickNumber"]
    return r0
}
function func_serializeForViewer_00000373AE121279()
{
    r2 = this["map"]
    r3 = /"(-?[a-z]+)+"/
    r0 = r2["name"]["match"](r3)
    r2 = this["serializeCommon"]
    r2 = r2()
    r1 = CloneObject(r2)
    r5 = this["world"]
    r3 = r5["serializeForViewer"]()
    r2 = r1
    ACCU = _CopyDataProperties(r2, r3)
    ACCU = r0
    if (r0)
    {
        r4 = r0[0]
        ACCU = r4["replace"]("-", "_")
    }
    else
    {
        ACCU = ""
    }
    r1["mapName"] = ACCU
    return r1
}
function func_serializeForTeam_00000373AE120F81(a0)
{
    r1 = this["serializeCommon"]
    r1 = r1()
    r0 = CloneObject(r1)
    r4 = this["world"]
    r2 = r4["serializeForPlayer"]()
    r1 = r0
    ACCU = _CopyDataProperties(r1, r2)
    r4 = this["lastTickErrors"]
    ACCU = r4["get"](a0)
    r3 = r4["get"](a0)
    if (!r4["get"](a0) == undefined)
    {
        ACCU = r3["map"](func_unknown_00000373AE1210C1)
    }
    else
    {
        ACCU = undefined
    }
    if (!ACCU == undefined)
    {
        ACCU = []
    }
    r0["lastTickErrors"] = ACCU
    return r0
}
function func_unknown_00000373AE1210C1(a0)
{
    return a0["message"]
}
function func_serializeConstants_00000373AE120EA1()
{
    return {}
}
function func_addStatsForTeam_00000373AE120DC1()
{
    return undefined
}
function func_updateGame_00000373AE120C79()
{
    r1 = this["world"]
    if (!this["world"] == undefined)
    {
        ACCU = r1["update"]()
    }
    else
    {
        ACCU = undefined
    }
    return undefined
}
function func_getGameResults_00000373AE1209D1()
{
    r1 = new [0]
    r2 = new {"rank": 1, "score": null, "teamId": null, "teamName": null}
    r2["score"] = (this["currentTickNumber"] * 5)
    ACCU = this["_engineTeam"]
    r3 = this["_engineTeam"]
    if (!this["_engineTeam"] == undefined)
    {
        ACCU = r3["externalId"]
    }
    else
    {
        ACCU = undefined
    }
    if (!ACCU == undefined)
    {
        ACCU = ""
    }
    r2["teamId"] = ACCU
    ACCU = this["_engineTeam"]
    r3 = this["_engineTeam"]
    if (!this["_engineTeam"] == undefined)
    {
        ACCU = r3["name"]
    }
    else
    {
        ACCU = undefined
    }
    if (!ACCU == undefined)
    {
        ACCU = ""
    }
    r2["teamName"] = ACCU
    r1[0] = r2
    return r1
}
function func_isGameComplete_00000373AE1204F9()
{
    r1 = Scope[2]
    Scope[3][2] = null
    Scope[3][3] = null
    if (undetectable === this["world"])
    {
        return false
    }
    r3 = this["world"]
    r2 = r3["getCharacterPosition"]()
    Scope[3][2] = r2["x"]
    Scope[3][3] = r2["y"]
    r4 = this["world"]
    r3 = r4["getThreatPositions"]()
    ACCU = r3["some"](func_unknown_00000373AE120781)
    r0 = r3["some"](func_unknown_00000373AE120781)
    if (!r3["some"](func_unknown_00000373AE120781))
    {
        r2 = this["currentTickNumber"]
        r3 = this["options"]
        ACCU = r2 > r3["TICK_COUNT"]
    }
    return ACCU
}
function func_unknown_00000373AE120781(a0)
{
    if (a0["x"] === Scope[3][2])
    {
        if (a0["y"] === Scope[3][3])
        {
            ACCU = "console"["log"]("______________Character died_______________")
            return true
        }
    }
    return undefined
}
function func_applyActions_00000373AE11FF91(a0, a1)
{
    r0 = Scope[2]
    Scope[4][2] = this
    Scope[4][3] = a0
    ACCU = a1["actions"]["forEach"](func_unknown_00000373AE1200E9)
    return undefined
}
function func_unknown_00000373AE1200E9(a0)
{
    r1 = <context>
    try
    {
        r0 = Scope[1][3]["ActionFactory"](a0)
        if (!Scope[4][2]["world"] == undefined)
        {
            ACCU = Scope[4][2]["world"]["applyAction"](Scope[4][3]["id"], r0)
        }
        else
        {
            ACCU = undefined
        }
    }
    catch
    {
        r2 = ACCU
        ACCU = null
        r2 = Scope[4]
        r4 = Scope[1][2]["logger"]
        r5 = ("Error applying action '" + String("JSON"["stringify"](a0)))
        r5 = (r5 + "'")
        ACCU = Scope[1][2]["logger"]["error"](r5)
        if (Scope[5][2] instanceof "Error")
        {
            ACCU = Scope[4][3]["reportError"](Scope[5][2])
            r4 = Scope[4][2]["lastTickErrors"]["get"](Scope[4][3]["id"])
            if (!Scope[4][2]["lastTickErrors"]["get"](Scope[4][3]["id"]) == undefined)
            {
                ACCU = Scope[1][4]["ActionError"]
                r6 = a0
                r5 = Scope[1][4]["ActionError"](r6, Scope[5][2])
                ACCU = r4["push"](r5)
            }
            else
            {
                ACCU = undefined
            }
        }
        ACCU = Scope[4]
    }
    return undefined
}
function func_fetchAndApplyPlayerCommands_00000373AE11F831()
{
    r2 = Scope[2]
    ACCU = this
    Scope[6][2] = this
    r3 = <closure>
    r4 = this
    r0 = this
    r3 = <context>
    try
    {
        r5 = Scope[6][2]["engine"]["getCommandsFromTeams"]()
        r4 = r0
        r4 = await r5
        r5 = _GeneratorGetResumeMode(r0)
        if (!r5 === 0)
        {
            ACCU = r4
        }
        r1 = r4
        Scope[6][2]["lastTickErrors"] = "Map"(r0)
        ACCU = r1["forEach"](func_unknown_00000373AE11FA29)
        r5 = undefined
        r4 = r0
        ACCU = r5
        return r5
    }
    catch {}
    r4 = ACCU
    ACCU = null
    r4 = Scope[6]
    r5 = r0
    return Scope[7][2]
}
function func_unknown_00000373AE11FA29(a0)
{
    if (a0["command"])
    {
        ACCU = Scope[6][2]["_engineTeam"]
        if (Scope[6][2]["_engineTeam"])
        {
            r1 = <context>
            try
            {
                ACCU = undetectable === a0["command"]["actions"]
                if (undetectable === a0["command"]["actions"])
                {
                    ACCU = "Error"("Command invalid: 'actions' missing.")
                    ACCU = Scope[6][2]["applyActions"](Scope[6][2]["_engineTeam"], a0["command"])
                }
            }
            catch
            {
                r2 = ACCU
                ACCU = null
                r2 = Scope[6]
                r4 = Scope[1][2]["logger"]
                r5 = ("Team '" + String(Scope[6][2]["_engineTeam"]["id"]))
                r5 = (r5 + "': Error processing command '")
                r5 = (r5 + String("JSON"["stringify"](a0["command"])))
                r5 = (r5 + "' :")
                r5 = (r5 + String(Scope[8][2]))
                ACCU = Scope[1][2]["logger"]["error"](r5)
                if (Scope[8][2] instanceof "Error")
                {
                    ACCU = Scope[6][2]["_engineTeam"]["reportError"](Scope[8][2])
                    r4 = Scope[6][2]["lastTickErrors"]["get"](Scope[6][2]["_engineTeam"]["id"])
                    if (!Scope[6][2]["lastTickErrors"]["get"](Scope[6][2]["_engineTeam"]["id"]) == undefined)
                    {
                        ACCU = r4["push"](Scope[8][2])
                    }
                    else
                    {
                        ACCU = undefined
                    }
                }
                ACCU = Scope[6]
            }
        }
    }
    return undefined
}
function func_playOneTick_00000373AE11F2B1(a0)
{
    r2 = <closure>
    r3 = this
    r0 = ACCU
    r2 = <context>
    try
    {
        this["currentTickNumber"] = a0
        r3 = this["isGameComplete"]
        if (r3())
        {
            r3 = this["getGameResults"]
            r1 = r3()
            r6 = r1[0]
            r5 = ("Your score is:" + String(r6["score"]))
            ACCU = "console"["log"](r5)
            r3 = new {"gameComplete": true, "gameResults": null}
            r4 = new {"results": null}
            r4["results"] = r1
            r3["gameResults"] = r4
            r4 = r3
            r3 = r0
            return r4
        }
        if (a0 > 0)
        {
            r3 = this["fetchAndApplyPlayerCommands"]
            r4 = r3()
            r3 = r0
            r3 = await r4
            r4 = _GeneratorGetResumeMode(r0)
            if (!r4 === 0)
            {
                ACCU = r3
            }
            ACCU = r3
        }
        r3 = this["updateGame"]
        ACCU = r3()
        r3 = new {"gameComplete": false, "gameState": null, "errorsPerTeam": null, "commands": []}
        r4 = this["serializeForViewer"]
        r3["gameState"] = r4()
        r7 = this["lastTickErrors"]
        r6 = r7["entries"]()
        r3["errorsPerTeam"] = "Object"["fromEntries"](r6)
        r4 = r3
        r3 = r0
        return r4
    }
    catch {}
    r3 = ACCU
    ACCU = null
    r3 = Scope[2]
    r4 = r0
    return Scope[9][2]
}
function func_setup_00000373AE11F019()
{
    r1 = <closure>
    r2 = this
    r0 = ACCU
    r1 = <context>
    try
    {
        if (undetectable === this["_engineTeam"])
        {
            ACCU = "Error"
            ACCU = "Error"("No team registered!")
        }
        r4 = this["options"]
        r5 = this["rng"]
        r6 = this["_engineTeam"]
        r7 = this["map"]
        ACCU = Scope[1][7]["World"]
        this["world"] = Scope[1][7]["World"](r4, r5, r6, r7)
        r3 = undefined
        r2 = r0
        return r3
    }
    catch {}
    r2 = ACCU
    ACCU = null
    r2 = Scope[2]
    r3 = r0
    return Scope[10][2]
}
function func_registerTeam_00000373AE11EEE1(a0)
{
    this["_engineTeam"] = a0
    return undefined
}
function func_loadMap_00000373AE11ECC1(a0, a1)
{
    if (undetectable === a0)
    {
        return Scope[1][5]["MapLoader"]["loadRandomMap"](a1)
    }
    if (typeof(a0) == string)
    {
        if (a0 === "")
        {
            return Scope[1][5]["MapLoader"]["loadRandomMap"](a1)
        }
        return Scope[1][5]["MapLoader"]["loadFromMapName"](a0)
    }
    return a0
}
function func_Blitz2025Challenge_00000373AE11E6F9(a0, a1)
{
    this["lastTickErrors"] = "Map"(r0)
    this["currentTickNumber"] = 1
    this["engine"] = a0
    r1 = CloneObject(Scope[2][2]["DEFAULT_GAME_OPTIONS"])
    r2 = r1
    r3 = a1
    ACCU = _CopyDataProperties(r2, r3)
    this["options"] = r2
    r3 = this["options"]
    r2 = ("Random seed:" + String(r3["RANDOM_SEED"]))
    ACCU = Scope[1][2]["logger"]["info"](r2)
    r2 = this["options"]
    ACCU = Scope[1][6]["Random"]
    this["rng"] = Scope[1][6]["Random"](r2["RANDOM_SEED"])
    r3 = this["options"]
    r4 = this["options"]
    this["map"] = Scope[2][2]["loadMap"](r3["MAP_NAME"], r4["MAP_DIFFICULTY"])
    return undefined
}
