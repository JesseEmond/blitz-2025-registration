function func_unknown()
{
    r0 = func_unknown_0000032BF1C1DD69
    return func_unknown_0000032BF1C1DD69
}
function func_unknown_0000032BF1C1DD69(a0, a1, a2, a3, a4)
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
    a0["World"] = undefined
    Scope[1][2] = a1("./actions/action_types")
    Scope[1][3] = a1("./character")
    Scope[1][4] = a1("./geometry/vector")
    Scope[1][5] = a1("./threats/threat_factory")
    Scope[1][6] = a1("./utils/pathfinding")
    Scope[1][7] = a1("./generated/GameInterface")
    r2 = Scope[1]
    Scope[2][2] = null
    r4 = DefineClass([12, DescriptorArray[5], NumberDictionary[7], [], DescriptorArray[9], NumberDictionary[7], []], func_World_0000032BF1C1E5B1, null, func_createTiles_0000032BF1C1F7A1, func_update_0000032BF1C1FC79, func_applyAction_0000032BF1C1FFD9, func_moveCharacterAlongPath_0000032BF1C203A1, func_moveCharacter_0000032BF1C20691, func_serializeForViewer_0000032BF1C20A29, func_serializeForPlayer_0000032BF1C20CD9, func_serializeForThreat_0000032BF1C21049, func_serializeCommon_0000032BF1C21341)
    Scope[2][2] = func_World_0000032BF1C1E5B1
    a0["World"] = Scope[1]
    return undefined
}
function func_serializeCommon_0000032BF1C21341()
{
    r0 = new {"map": null}
    r1 = new {"width": null, "height": null, "tiles": null}
    r1["width"] = this["width"]
    r1["height"] = this["height"]
    r3 = this["tiles"]
    r1["tiles"] = r3["map"](func_unknown_0000032BF1C214A9)
    r0["map"] = r1
    return r0
}
function func_unknown_0000032BF1C214A9(a0)
{
    return a0["map"](func_unknown_0000032BF1C21549)
}
function func_unknown_0000032BF1C21549(a0)
{
    return a0["type"]
}
function func_serializeForThreat_0000032BF1C21049()
{
    r1 = this["serializeCommon"]
    r1 = r1()
    r0 = CloneObject(r1)
    r0["tick"] = this["tickCounter"]
    r2 = this["threats"]
    r0["threats"] = r2["map"](func_unknown_0000032BF1C21179)
    r2 = this["character"]
    r0["character"] = r2["serializeForViewer"]()
    r0["pathfindingGrid"] = this["pathfindingGrid"]
    return r0
}
function func_unknown_0000032BF1C21179(a0)
{
    return a0["serializeForViewer"]()
}
function func_serializeForPlayer_0000032BF1C20CD9()
{
    r1 = this["serializeCommon"]
    r1 = r1()
    r0 = CloneObject(r1)
    r2 = this["threats"]
    r0["threats"] = r2["map"](func_unknown_0000032BF1C20E19)
    r3 = this["character"]
    r2 = r3["serializeForPlayer"]()
    r1 = CloneObject(r2)
    r3 = this["pathfindingGrid"]
    r4 = this["character"]
    r1["distances"] = r3["getDistances"](r4["position"])
    r0["yourCharacter"] = r1
    return r0
}
function func_unknown_0000032BF1C20E19(a0)
{
    return a0["serializeForPlayer"]()
}
function func_serializeForViewer_0000032BF1C20A29()
{
    r1 = this["serializeCommon"]
    r1 = r1()
    r0 = CloneObject(r1)
    r2 = this["threats"]
    r0["threats"] = r2["map"](func_unknown_0000032BF1C20B19)
    r2 = this["character"]
    r0["character"] = r2["serializeForViewer"]()
    return r0
}
function func_unknown_0000032BF1C20B19(a0)
{
    return a0["serializeForViewer"]()
}
function func_moveCharacter_0000032BF1C20691(a0)
{
    r0 = Scope[2]
    Scope[3][2] = null
    if (undetectable === this["character"])
    {
        return undefined
    }
    r2 = this["character"]
    Scope[3][2] = r2["position"]["add"](a0)
    r2 = this["map"]
    if (!r2["walkableTiles"]["some"](func_unknown_0000032BF1C20871))
    {
        return undefined
    }
    r2 = this["character"]
    ACCU = r2["move"](Scope[3][2], a0)
    return undefined
}
function func_unknown_0000032BF1C20871(a0)
{
    return a0["equals"](Scope[3][2])
}
function func_moveCharacterAlongPath_0000032BF1C203A1(a0)
{
    if (undetectable === this["character"])
    {
        ACCU = "console"["log"]("no character")
        return undefined
    }
    r3 = this["pathfindingGrid"]
    r4 = this["character"]
    r0 = r3["getPath"](r4["position"], a0)
    if (r3["getPath"](r4["position"], a0) == null)
    	|| (r0["length"] === 0)
    {
        ACCU = "console"["log"]("No path found")
        ACCU = "Error"
        ACCU = "Error"("No path found")
    }
    r1 = r0[1]
    r2 = this["moveCharacter"]
    r6 = this["character"]
    r4 = r1["subtract"](r6["position"])
    ACCU = r2(r4)
    return undefined
}
function func_applyAction_0000032BF1C1FFD9(a0, a1)
{
    switch ()
    case a1["type"] === Scope[1][2]["ActionType"]["MOVE_LEFT"]:
    {
        r1 = this["moveCharacter"]
        ACCU = Scope[1][4]["Vector"]
        r3 = Scope[1][4]["Vector"](-1, 0)
        ACCU = r1(r3)
        break
    }
    case a1["type"] === Scope[1][2]["ActionType"]["MOVE_RIGHT"]:
    {
        r1 = this["moveCharacter"]
        ACCU = Scope[1][4]["Vector"]
        r3 = Scope[1][4]["Vector"](1, 0)
        ACCU = r1(r3)
        break
    }
    case a1["type"] === Scope[1][2]["ActionType"]["MOVE_UP"]:
    {
        r1 = this["moveCharacter"]
        ACCU = Scope[1][4]["Vector"]
        r3 = Scope[1][4]["Vector"](0, -1)
        ACCU = r1(r3)
        break
    }
    case a1["type"] === Scope[1][2]["ActionType"]["MOVE_DOWN"]:
    {
        r1 = this["moveCharacter"]
        ACCU = Scope[1][4]["Vector"]
        r3 = Scope[1][4]["Vector"](0, 1)
        ACCU = r1(r3)
        break
    }
    case a1["type"] === Scope[1][2]["ActionType"]["MOVE_TO"]:
    {
        r1 = this["moveCharacterAlongPath"]
        ACCU = r1(a1["position"])
    }
    default:
    {}
    return undefined
}
function func_update_0000032BF1C1FC79()
{
    r0 = Scope[2]
    Scope[4][2] = this
    ACCU = Scope[4][2]["character"]["update"]()
    ACCU = Scope[4][2]["threats"]["forEach"](func_unknown_0000032BF1C1FDD1)
    Scope[4][2]["tickCounter"] = (Scope[4][2]["tickCounter"] + 1)
    return undefined
}
function func_unknown_0000032BF1C1FDD1(a0)
{
    r2 = Scope[4][2]["serializeForThreat"]()
    ACCU = a0["update"](r2)
    r2 = Scope[4][2]["character"]["position"]["serialize"]()
    ACCU = a0["setCharacterPosition"](r2)
    return undefined
}
function func_createTiles_0000032BF1C1F7A1(a0)
{
    r2 = Scope[2]
    Scope[5][2] = null
    ACCU = "Array"
    Scope[5][2] = "Array"(a0["width"])
    r0 = 0
    while (true)
    {
        if (!r0 < a0["width"]) break
        ACCU = "Array"
        Scope[5][2][r0] = "Array"(a0["height"])
        r1 = 0
        while (true)
        {
            if (!r1 < a0["height"]) continue
            r5 = new {"type": null}
            r5["type"] = Scope[1][7]["TileType"]["EMPTY"]
            Scope[5][2][r0][r1] = r5
            r1 = (r1 + 1)
        }
        r0 = (r0 + 1)
    }
    ACCU = a0["nonWalkableTiles"]["forEach"](func_unknown_0000032BF1C1FA39)
    return Scope[5][2]
}
function func_unknown_0000032BF1C1FA39(a0)
{
    r2 = new {"type": null}
    r2["type"] = Scope[1][7]["TileType"]["WALL"]
    Scope[5][2][a0["x"]][a0["y"]] = r2
    return undefined
}
function func_World_0000032BF1C1E5B1(a0, a1, a2, a3)
{
    r0 = Scope[2]
    Scope[6][2] = this
    Scope[6][3] = null
    Scope[6][2]["options"] = a0
    Scope[6][2]["rng"] = a1
    Scope[6][2]["engineTeam"] = a2
    Scope[6][2]["map"] = a3
    Scope[6][2]["tickCounter"] = 0
    Scope[6][2]["threats"] = []
    Scope[6][2]["character"] = {}
    Scope[6][2]["getCharacterPosition"] = func_unknown_0000032BF1C1E9A1
    Scope[6][2]["getThreatPositions"] = func_unknown_0000032BF1C1EDE1
    Scope[6][2]["width"] = a3["width"]
    Scope[6][2]["height"] = a3["height"]
    Scope[6][2]["tiles"] = Scope[2][2]["createTiles"](a3)
    Scope[6][2]["team"] = a2
    Scope[6][3] = Scope[6][2]["tiles"]["map"](func_unknown_0000032BF1C1F0F1)
    r4 = Scope[6][2]["tiles"]["map"](func_unknown_0000032BF1C1F391)
    Scope[6][2]["pathfindingGrid"] = Scope[1][6]["PathfindingGrid"]["from2DArray"](r4, false)
    Scope[6][2]["characterSpawn"] = a3["character"]
    if (!undetectable === Scope[6][2]["team"]["id"])
    {
        ACCU = Scope[1][3]["Character"]
        r3 = a0
        Scope[6][2]["character"] = Scope[1][3]["Character"](r3, Scope[6][2]["team"]["id"], Scope[6][2]["characterSpawn"])
    }
    Scope[6][2]["threats"] = a3["threats"]["map"](func_unknown_0000032BF1C1F601)
    return undefined
}
function func_unknown_0000032BF1C1F601(a0)
{
    return Scope[1][5]["createThreat"](Scope[6][3], a0["position"], "lazy", a0["style"])
}
function func_unknown_0000032BF1C1F391(a0)
{
    return a0["map"](func_unknown_0000032BF1C1F431)
}
function func_unknown_0000032BF1C1F431(a0)
{
    ACCU = a0["type"] === Scope[1][7]["TileType"]["WALL"]
    if (a0["type"] === Scope[1][7]["TileType"]["WALL"])
    {
        ACCU = 1
    }
    else
    {
        ACCU = 0
    }
    return ACCU
}
function func_unknown_0000032BF1C1F0F1(a0)
{
    return a0["map"](func_unknown_0000032BF1C1F191)
}
function func_unknown_0000032BF1C1F191(a0)
{
    ACCU = a0["type"] === Scope[1][7]["TileType"]["WALL"]
    if (a0["type"] === Scope[1][7]["TileType"]["WALL"])
    {
        ACCU = 0
    }
    else
    {
        ACCU = 1
    }
    return ACCU
}
function func_unknown_0000032BF1C1EDE1()
{
    return Scope[6][2]["threats"]["map"](func_unknown_0000032BF1C1EE91)
}
function func_unknown_0000032BF1C1EE91(a0)
{
    if (!a0["position"])
    {
        return new {"x": -1, "y": -1}
    }
    r0 = new {"x": null, "y": null}
    r0["x"] = a0["position"]["x"]
    r0["y"] = a0["position"]["y"]
    return r0
}
function func_unknown_0000032BF1C1E9A1()
{
    if (!Scope[6][2]["character"])
    {
        return new {"x": -1, "y": -1}
    }
    r0 = new {"x": null, "y": null}
    r1 = Scope[6][2]["character"]["position"]["serialize"]()
    r0["x"] = r1["x"]
    r1 = Scope[6][2]["character"]["position"]["serialize"]()
    r0["y"] = r1["y"]
    return r0
}
