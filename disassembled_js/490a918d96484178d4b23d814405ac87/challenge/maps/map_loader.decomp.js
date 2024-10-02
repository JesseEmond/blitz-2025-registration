function func_unknown()
{
    r0 = func_unknown_000002DD4D5DDD69
    return func_unknown_000002DD4D5DDD69
}
function func_unknown_000002DD4D5DDD69(a0, a1, a2, a3, a4)
{
    r3 = Scope[0]
    Scope[1][4] = null
    Scope[1][5] = null
    Scope[1][6] = null
    Scope[1][7] = null
    Scope[1][8] = null
    Scope[1][10] = null
    Scope[1][11] = null
    Scope[1][12] = null
    Scope[1][13] = null
    Scope[1][14] = null
    Scope[1][15] = null
    ACCU = this
    if (this)
    {
        ACCU = this["__createBinding"]
    }
    if (!ACCU)
    {
        ACCU = "Object"["create"]
        if ("Object"["create"])
        {
            ACCU = func_unknown_000002DD4D5DE5A9
        }
        else
        {
            ACCU = func_unknown_000002DD4D5DEB01
        }
    }
    Scope[1][2] = ACCU
    ACCU = this
    if (this)
    {
        ACCU = this["__setModuleDefault"]
    }
    if (!ACCU)
    {
        ACCU = "Object"["create"]
        if ("Object"["create"])
        {
            ACCU = func_unknown_000002DD4D5DEC11
        }
        else
        {
            ACCU = func_unknown_000002DD4D5DEDA9
        }
    }
    Scope[1][3] = ACCU
    ACCU = this
    if (this)
    {
        ACCU = this["__importStar"]
    }
    if (!ACCU)
    {
        ACCU = func_unknown_000002DD4D5DEEC1
    }
    r0 = ACCU
    ACCU = this
    if (this)
    {
        ACCU = this["__importDefault"]
    }
    if (!ACCU)
    {
        ACCU = func_unknown_000002DD4D5DF0D9
    }
    r1 = ACCU
    r8 = new {"value": true}
    r6 = a0
    ACCU = "Object"["defineProperty"](r6, "__esModule", r8)
    r6 = undefined
    a0["MapLoader"] = undefined
    a0["MapImageFile"] = r6
    Scope[1][4] = a1("@blitz/engine")
    r5 = a1("fs")
    Scope[1][5] = r0(r5)
    r5 = a1("path")
    Scope[1][6] = r1(r5)
    Scope[1][7] = a1("pngjs")
    Scope[1][8] = a1("../geometry/vector")
    ACCU = Scope[1][9]
    if (!Scope[1][9])
    {
        ACCU = {}
        Scope[1][9] = {}
    }
    r5 = ACCU
    ACCU = func_unknown_000002DD4D5DF241(r5)
    r5 = new [0, 0, 0, 0, 0, 0, 0, 0, 0]
    r6 = new {"type": null, "color": {"r": 0, "g": 0, "b": 0}}
    r6["type"] = Scope[1][9]["NON_WALKABLE"]
    r5[0] = r6
    r6 = new {"type": null, "color": {"r": 255, "g": 255, "b": 255}}
    r6["type"] = Scope[1][9]["WALKABLE"]
    r5[1] = r6
    r6 = new {"type": null, "color": {"r": 0, "g": 0, "b": 255}}
    r6["type"] = Scope[1][9]["CHARACTER"]
    r5[2] = r6
    r6 = new {"type": null, "color": {"r": 255, "g": 0, "b": 0}}
    r6["type"] = Scope[1][9]["THREAT_STRAITHEAD"]
    r5[3] = r6
    r6 = new {"type": null, "color": {"r": 255, "g": 125, "b": 0}}
    r6["type"] = Scope[1][9]["THREAT_GIROUETTE"]
    r5[4] = r6
    r6 = new {"type": null, "color": {"r": 255, "g": 255, "b": 0}}
    r6["type"] = Scope[1][9]["THREAT_AGGRESSIVE"]
    r5[5] = r6
    r6 = new {"type": null, "color": {"r": 0, "g": 125, "b": 0}}
    r6["type"] = Scope[1][9]["THREAT_SURVEILLANCE"]
    r5[6] = r6
    r6 = new {"type": null, "color": {"r": 0, "g": 255, "b": 0}}
    r6["type"] = Scope[1][9]["THREAT_LE_FANTOME_ORANGE_DANS_PACMAN"]
    r5[7] = r6
    r6 = new {"type": null, "color": {"r": 125, "g": 125, "b": 0}}
    r6["type"] = Scope[1][9]["THREAT_SHERIFF"]
    r5[8] = r6
    Scope[1][10] = r5
    r5 = new [{"r": 255, "g": 0, "b": 0}, {"r": 0, "g": 0, "b": 255}, {"r": 0, "g": 255, "b": 0}, {"r": 255, "g": 255, "b": 0}]
    Scope[1][11] = r5["map"](func_unknown_000002DD4D5DF599)
    Scope[1][12] = "./maps"
    Scope[1][13] = "meta.json"
    Scope[1][14] = "layout.png"
    r4 = Scope[1]
    Scope[2][2] = null
    r6 = DefineClass([14, DescriptorArray[15], NumberDictionary[7], [], DescriptorArray[1], NumberDictionary[7], []], func_MapLoader_000002DD4D5E25D1, null, func_listMaps_000002DD4D5DF729, func_mapHasAllRequiredFiles_000002DD4D5E0041, func_listMapsWithDifficulty_000002DD4D5E03D1, func_loadFromMapName_000002DD4D5E07D1, func_loadFromComponents_000002DD4D5E0A89, func_loadMetadata_000002DD4D5E0CF1, func_loadRandomMap_000002DD4D5E0E61, func_loadEntities_000002DD4D5E1281, func_get_tile_type_000002DD4D5E1DC1, func_get_team_000002DD4D5E1F41, func_get_best_match_000002DD4D5E20A1)
    Scope[2][2] = func_MapLoader_000002DD4D5E25D1
    a0["MapLoader"] = Scope[1]
    r4 = Scope[1]
    Scope[3][2] = null
    r6 = DefineClass([7, DescriptorArray[5], NumberDictionary[7], [], DescriptorArray[4], NumberDictionary[7], []], func_MapImageFile_000002DD4D5E26B1, null, func_loadFromFile_000002DD4D5E2881, func_get width_000002DD4D5E2AA9, func_get height_000002DD4D5E2BD9, func_getPixel_000002DD4D5E2D09)
    Scope[3][2] = func_MapImageFile_000002DD4D5E26B1
    Scope[1][15] = Scope[1]
    a0["MapImageFile"] = Scope[1][15]
    return undefined
}
function func_getPixel_000002DD4D5E2D09(a0, a1)
{
    r1 = this["_width"]
    r1 = (r1 * a1)
    r0 = ((r1 + a0) * 4)
    r1 = new {"r": null, "g": null, "b": null, "a": null}
    r2 = this["_buffer"]
    r1["r"] = r2[r0]
    r2 = this["_buffer"]
    r1["g"] = r2[(r0 + 1)]
    r2 = this["_buffer"]
    r1["b"] = r2[(r0 + 2)]
    r2 = this["_buffer"]
    r1["a"] = r2[(r0 + 3)]
    return r1
}
function func_get height_000002DD4D5E2BD9()
{
    return this["_height"]
}
function func_get width_000002DD4D5E2AA9()
{
    return this["_width"]
}
function func_loadFromFile_000002DD4D5E2881(a0)
{
    r0 = Scope[1][5]["readFileSync"](a0)
    r1 = Scope[1][7]["PNG"]["sync"]["read"](r0)
    ACCU = Scope[3][2]
    return Scope[3][2](r1["data"], r1["width"], r1["height"])
}
function func_MapImageFile_000002DD4D5E26B1(a0, a1, a2)
{
    this["_buffer"] = a0
    this["_width"] = a1
    this["_height"] = a2
    return undefined
}
function func_get_best_match_000002DD4D5E20A1(a0, a1)
{
    r2 = Scope[2]
    Scope[4][2] = a0
    Scope[4][3] = func_colorError_000002DD4D5E2221
    r4 = Array.from(a1)
    r3 = r4["sort"](func_unknown_000002DD4D5E2449)
    r0 = r3[0]
    r3 = Scope[4][3](r0["color"])
    r1 = r3 < 20
    if (r3 < 20)
    {
        return r0
    }
    return null
}
function func_unknown_000002DD4D5E2449(a0, a1)
{
    r0 = Scope[4][3](a0["color"])
    return (r0 - Scope[4][3](a1["color"]))
}
function func_colorError_000002DD4D5E2221(a0)
{
    r0 = "Math"["abs"]((Scope[4][2]["r"] - a0["r"]))
    r0 = (r0 + "Math"["abs"]((Scope[4][2]["g"] - a0["g"])))
    return (r0 + "Math"["abs"]((Scope[4][2]["b"] - a0["b"])))
}
function func_get_team_000002DD4D5E1F41(a0)
{
    r0 = this["get_best_match"]
    ACCU = r0(a0, Scope[1][11])
    r0 = r0(a0, Scope[1][11])
    if (!ACCU == undefined)
    {
        ACCU = r0["teamIndex"]
    }
    else
    {
        ACCU = undefined
    }
    if (!ACCU == undefined)
    {
        ACCU = null
    }
    return ACCU
}
function func_get_tile_type_000002DD4D5E1DC1(a0)
{
    r0 = this["get_best_match"]
    ACCU = r0(a0, Scope[1][10])
    r0 = r0(a0, Scope[1][10])
    if (!ACCU == undefined)
    {
        ACCU = r0["type"]
    }
    else
    {
        ACCU = undefined
    }
    if (!ACCU == undefined)
    {
        ACCU = Scope[1][9]["WALKABLE"]
    }
    return ACCU
}
function func_loadEntities_000002DD4D5E1281(a0)
{
    r4 = new {"walkableTiles": [], "nonWalkableTiles": [], "threats": [], "character": null}
    ACCU = Scope[1][8]["Vector"]
    r4["character"] = Scope[1][8]["Vector"](0, 0)
    r0 = r4
    r1 = 0
    while (true)
    {
        if (!r1 < a0["height"]) break
        r2 = 0
        while (true)
        {
            if (!r2 < a0["width"]) continue
            r3 = a0["getPixel"](r2, r1)
            if (r3["a"] < 255)
            {
                continue
            }
            r4 = this["get_tile_type"]
            r4 = r4(r3)
            if (!r4 === Scope[1][9]["NON_WALKABLE"])
            {
                if (!r4 === Scope[1][9]["WALKABLE"])
                {
                    if (!r4 === Scope[1][9]["CHARACTER"])
                    {
                        if (!r4 === Scope[1][9]["THREAT_STRAITHEAD"])
                        {
                            if (!r4 === Scope[1][9]["THREAT_GIROUETTE"])
                            {
                                if (!r4 === Scope[1][9]["THREAT_AGGRESSIVE"])
                                {
                                    if (!r4 === Scope[1][9]["THREAT_SURVEILLANCE"])
                                    {
                                        if (!r4 === Scope[1][9]["THREAT_LE_FANTOME_ORANGE_DANS_PACMAN"])
                                        {
                                            if (!r4 === Scope[1][9]["THREAT_SHERIFF"])
                                            {
                                                continue
                                            }
                                            ACCU = Scope[1][8]["Vector"]
                                            r8 = r2
                                            r9 = r1
                                            r7 = Scope[1][8]["Vector"](r8, r9)
                                            ACCU = r0["nonWalkableTiles"]["push"](r7)
                                            continue
                                        }
                                        ACCU = Scope[1][8]["Vector"]
                                        r8 = r2
                                        r9 = r1
                                        r7 = Scope[1][8]["Vector"](r8, r9)
                                        ACCU = r0["walkableTiles"]["push"](r7)
                                        continue
                                    }
                                    ACCU = Scope[1][8]["Vector"]
                                    r7 = r2
                                    r8 = r1
                                    r0["character"] = Scope[1][8]["Vector"](r7, r8)
                                    ACCU = Scope[1][8]["Vector"]
                                    r8 = r2
                                    r9 = r1
                                    r7 = Scope[1][8]["Vector"](r8, r9)
                                    ACCU = r0["walkableTiles"]["push"](r7)
                                    continue
                                }
                                r7 = new {"position": null, "style": "straitHead"}
                                ACCU = Scope[1][8]["Vector"]
                                r9 = r2
                                r10 = r1
                                r7["position"] = Scope[1][8]["Vector"](r9, r10)
                                ACCU = r0["threats"]["push"](r7)
                                ACCU = Scope[1][8]["Vector"]
                                r8 = r2
                                r9 = r1
                                r7 = Scope[1][8]["Vector"](r8, r9)
                                ACCU = r0["walkableTiles"]["push"](r7)
                                continue
                            }
                            r7 = new {"position": null, "style": "girouette"}
                            ACCU = Scope[1][8]["Vector"]
                            r9 = r2
                            r10 = r1
                            r7["position"] = Scope[1][8]["Vector"](r9, r10)
                            ACCU = r0["threats"]["push"](r7)
                            ACCU = Scope[1][8]["Vector"]
                            r8 = r2
                            r9 = r1
                            r7 = Scope[1][8]["Vector"](r8, r9)
                            ACCU = r0["walkableTiles"]["push"](r7)
                            continue
                        }
                        r7 = new {"position": null, "style": "aggressive"}
                        ACCU = Scope[1][8]["Vector"]
                        r9 = r2
                        r10 = r1
                        r7["position"] = Scope[1][8]["Vector"](r9, r10)
                        ACCU = r0["threats"]["push"](r7)
                        ACCU = Scope[1][8]["Vector"]
                        r8 = r2
                        r9 = r1
                        r7 = Scope[1][8]["Vector"](r8, r9)
                        ACCU = r0["walkableTiles"]["push"](r7)
                        continue
                    }
                    r7 = new {"position": null, "style": "surveillance"}
                    ACCU = Scope[1][8]["Vector"]
                    r9 = r2
                    r10 = r1
                    r7["position"] = Scope[1][8]["Vector"](r9, r10)
                    ACCU = r0["threats"]["push"](r7)
                    ACCU = Scope[1][8]["Vector"]
                    r8 = r2
                    r9 = r1
                    r7 = Scope[1][8]["Vector"](r8, r9)
                    ACCU = r0["walkableTiles"]["push"](r7)
                    continue
                }
                r7 = new {"position": null, "style": "le_fantome_orange_dans_pacman"}
                ACCU = Scope[1][8]["Vector"]
                r9 = r2
                r10 = r1
                r7["position"] = Scope[1][8]["Vector"](r9, r10)
                ACCU = r0["threats"]["push"](r7)
                ACCU = Scope[1][8]["Vector"]
                r8 = r2
                r9 = r1
                r7 = Scope[1][8]["Vector"](r8, r9)
                ACCU = r0["walkableTiles"]["push"](r7)
                continue
            }
            r7 = new {"position": null, "style": "sheriff"}
            ACCU = Scope[1][8]["Vector"]
            r9 = r2
            r10 = r1
            r7["position"] = Scope[1][8]["Vector"](r9, r10)
            ACCU = r0["threats"]["push"](r7)
            ACCU = Scope[1][8]["Vector"]
            r8 = r2
            r9 = r1
            r7 = Scope[1][8]["Vector"](r8, r9)
            ACCU = r0["walkableTiles"]["push"](r7)
            continue
            r2 = (r2 + 1)
        }
        r1 = (r1 + 1)
    }
    return r0
}
function func_loadRandomMap_000002DD4D5E0E61(a0)
{
    if (undetectable === a0)
    {
        a0 = "all"
    }
    ACCU = a0 === "all"
    if (a0 === "all")
    {
        r2 = Scope[2][2]["listMaps"]()
        ACCU = r2["map"](func_unknown_000002DD4D5E0FF9)
    }
    else
    {
        ACCU = Scope[2][2]["listMapsWithDifficulty"](a0)
    }
    r0 = ACCU
    if (r0["length"] === 0)
    {
        r2 = ("No map in the maps folder '" + String(Scope[1][12]))
        r2 = (r2 + "' with difficulty '")
        r2 = (r2 + String(a0))
        r2 = (r2 + "'")
        ACCU = "Error"
        ACCU = "Error"(r2)
    }
    r1 = this["loadFromMapName"]
    r3 = Scope[1][4]["shuffle"](r0)
    r3 = r3[0]
    return r1(r3)
}
function func_unknown_000002DD4D5E0FF9(a0)
{
    return a0["name"]
}
function func_loadMetadata_000002DD4D5E0CF1(a0)
{
    r0 = new {"type": null, "difficulty": null}
    r0["type"] = a0["type"]
    r0["difficulty"] = a0["difficulty"]
    return r0
}
function func_loadFromComponents_000002DD4D5E0A89(a0, a1, a2)
{
    r0 = new {"name": null, "width": null, "height": null}
    r0["name"] = a0
    r0["width"] = a1["width"]
    r0["height"] = a1["height"]
    r2 = Scope[2][2]["loadEntities"](a1)
    r1 = r0
    ACCU = _CopyDataProperties(r1, r2)
    r2 = Scope[2][2]["loadMetadata"](a2)
    ACCU = _CopyDataProperties(r1, r2)
    return r1
}
function func_loadFromMapName_000002DD4D5E07D1(a0)
{
    r7 = a0
    r4 = Scope[1][6]["default"]["join"](Scope[1][12], r7, Scope[1][14])
    r0 = Scope[1][15]["loadFromFile"](r4)
    r9 = a0
    r6 = Scope[1][6]["default"]["join"](Scope[1][12], r9, Scope[1][13])
    r4 = Scope[1][5]["readFileSync"](r6, "utf8")
    r1 = "JSON"["parse"](r4)
    r2 = this["loadFromComponents"]
    r3 = this
    r4 = a0
    r5 = r0
    r6 = r1
    return r2(r4, r5, r6)
}
function func_listMapsWithDifficulty_000002DD4D5E03D1(a0)
{
    r0 = Scope[2]
    Scope[5][2] = a0
    r3 = this["listMaps"]
    r3 = r3()
    r2 = r3["filter"](func_unknown_000002DD4D5E0561)
    return r2["map"](func_unknown_000002DD4D5E0681)
}
function func_unknown_000002DD4D5E0681(a0)
{
    return a0["name"]
}
function func_unknown_000002DD4D5E0561(a0)
{
    return a0["difficulty"] == Scope[5][2]
}
function func_mapHasAllRequiredFiles_000002DD4D5E0041(a0)
{
    r0 = Scope[2]
    Scope[6][2] = a0
    r3 = new [0, 0]
    r3[0] = Scope[1][13]
    r3[1] = Scope[1][14]
    r1 = r3["every"]
    r2 = r3
    return r1(func_unknown_000002DD4D5E01F9)
}
function func_unknown_000002DD4D5E01F9(a0)
{
    r6 = a0
    r2 = Scope[1][6]["default"]["join"](Scope[1][12], Scope[6][2], r6)
    return Scope[1][5]["existsSync"](r2)
}
function func_listMaps_000002DD4D5DF729()
{
    r7 = new {"withFileTypes": true}
    r4 = Scope[1][5]["readdirSync"](Scope[1][12], r7)
    r3 = r4["filter"](func_unknown_000002DD4D5DF8D9)
    r2 = r3["map"](func_unknown_000002DD4D5DFA99)
    r1 = r2["filter"](func_unknown_000002DD4D5DFBA9)
    return r1["map"](func_unknown_000002DD4D5DFCF9)
}
function func_unknown_000002DD4D5DFCF9(a0)
{
    r0 = new {"name": null}
    r0["name"] = a0
    r10 = a0
    r7 = Scope[1][6]["default"]["join"](Scope[1][12], r10, Scope[1][13])
    r5 = Scope[1][5]["readFileSync"](r7, "utf8")
    r2 = "JSON"["parse"](r5)
    r1 = r0
    ACCU = _CopyDataProperties(r1, r2)
    return r1
}
function func_unknown_000002DD4D5DFBA9(a0)
{
    return Scope[2][2]["mapHasAllRequiredFiles"](a0)
}
function func_unknown_000002DD4D5DFA99(a0)
{
    return a0["name"]
}
function func_unknown_000002DD4D5DF8D9(a0)
{
    return a0["isDirectory"]()
}
function func_MapLoader_000002DD4D5E25D1()
{
    return undefined
}
function func_unknown_000002DD4D5DF599(a0, a1)
{
    r0 = new {"teamIndex": null, "color": null}
    r0["teamIndex"] = a1
    r0["color"] = a0
    return r0
}
function func_unknown_000002DD4D5DF241(a0)
{
    a0["WALKABLE"] = 0
    a0[0] = "WALKABLE"
    a0["NON_WALKABLE"] = 1
    a0[1] = "NON_WALKABLE"
    a0["CHARACTER"] = 2
    a0[2] = "CHARACTER"
    a0["THREAT_STRAITHEAD"] = 3
    a0[3] = "THREAT_STRAITHEAD"
    a0["THREAT_GIROUETTE"] = 4
    a0[4] = "THREAT_GIROUETTE"
    a0["THREAT_AGGRESSIVE"] = 5
    a0[5] = "THREAT_AGGRESSIVE"
    a0["THREAT_SURVEILLANCE"] = 6
    a0[6] = "THREAT_SURVEILLANCE"
    a0["THREAT_LE_FANTOME_ORANGE_DANS_PACMAN"] = 7
    a0[7] = "THREAT_LE_FANTOME_ORANGE_DANS_PACMAN"
    a0["THREAT_SHERIFF"] = 8
    a0[8] = "THREAT_SHERIFF"
    return undefined
}
function func_unknown_000002DD4D5DF0D9(a0)
{
    if (a0)
    ACCU = a0["__esModule"]
    	&& (a0["__esModule"])
    {
        ACCU = a0
    }
    else
    {
        r0 = new {"default": null}
        r0["default"] = a0
        ACCU = r0
    }
    return ACCU
}
function func_unknown_000002DD4D5DEEC1(a0)
{
    if (a0)
    {
        if (a0["__esModule"])
        {
            return a0
        }
    }
    r0 = {}
    if (!undetectable === a0)
    {
        if (!a0 == undefined)
        {
            r3 = Generator(ToObject(a0))
            r7 = 0
            while (true)
            {
                if (!GeneratorContinue(r7)) break
                if (r3.next().value == undefined) continue
                r2 = r3.next().value
                r1 = r3.next().value
                if (r1 === "default") continue
                if (!"Object"["prototype"]["hasOwnProperty"]["call"](a0, r1)) continue
                r9 = r0
                r10 = a0
                r11 = r1
                ACCU = Scope[1][2](r9, r10, r11)
                r7 = GeneratorStep(r7)
            }
        }
    }
    ACCU = Scope[1][3](r0, a0)
    return r0
}
function func_unknown_000002DD4D5DEDA9(a0, a1)
{
    a0["default"] = a1
    return undefined
}
function func_unknown_000002DD4D5DEC11(a0, a1)
{
    r4 = new {"enumerable": true, "value": null}
    r4["value"] = a1
    r2 = a0
    ACCU = "Object"["defineProperty"](r2, "default", r4)
    return undefined
}
function func_unknown_000002DD4D5DEB01(a0, a1, a2, a3)
{
    if (a3 == undefined)
    {
        a3 = a2
        ACCU = a3
    }
    a0[a3] = a1[a2]
    return undefined
}
function func_unknown_000002DD4D5DE5A9(a0, a1, a2, a3)
{
    r1 = Scope[1]
    Scope[7][3] = a1
    Scope[7][2] = a2
    if (a3 == undefined)
    {
        a3 = Scope[7][2]
    }
    r0 = "Object"["getOwnPropertyDescriptor"](Scope[7][3], Scope[7][2])
    if (!"Object"["getOwnPropertyDescriptor"](Scope[7][3], Scope[7][2]))
    ACCU = "get" in r0
    if ("get" in r0)
    {
        ACCU = !Boolean(Scope[7][3]["__esModule"])
    }
    else
    {
        ACCU = r0["writable"]
        if (!r0["writable"])
        {
            ACCU = r0["configurable"]
        }
    }
    	|| (ACCU)
    {
        r2 = new {"enumerable": true, "get": null}
        r2["get"] = func_get_000002DD4D5DE7E9
        r0 = r2
        ACCU = r2
    }
    r4 = a0
    r5 = a3
    r6 = r0
    ACCU = "Object"["defineProperty"](r4, r5, r6)
    return undefined
}
function func_get_000002DD4D5DE7E9()
{
    return Scope[7][3][Scope[7][2]]
}
