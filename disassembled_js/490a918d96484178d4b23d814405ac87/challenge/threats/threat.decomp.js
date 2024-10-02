function func_unknown()
{
    r0 = func_unknown_0000005F5D49DD69
    return func_unknown_0000005F5D49DD69
}
function func_unknown_0000005F5D49DD69(a0, a1, a2, a3, a4)
{
    r6 = new {"value": true}
    r4 = a0
    ACCU = "Object"["defineProperty"](r4, "__esModule", r6)
    a0["Threat"] = undefined
    r0 = a1("../entity")
    r3 = DefineClass([25, DescriptorArray[4], NumberDictionary[7], [], DescriptorArray[23], NumberDictionary[7], []], func_Threat_0000005F5D49E691, r0["Entity"], func_get direction_0000005F5D49F019, func_get map_0000005F5D49F141, func_get characterPosition_0000005F5D49F261, func_get randomNumber_0000005F5D49F391, func_setCharacterPosition_0000005F5D49F549, func_getRandomDirection_0000005F5D49F659, func_canMoveUp_0000005F5D49F9E9, func_canMoveDown_0000005F5D49FB59, func_canMoveLeft_0000005F5D49FD01, func_canMoveRight_0000005F5D49FE71, func_computeNewPositionAfterMove_0000005F5D4A0009, func_moveUp_0000005F5D4A0351, func_moveDown_0000005F5D4A04A9, func_moveLeft_0000005F5D4A0601, func_moveRight_0000005F5D4A0759, func_getPossibleDirections_0000005F5D4A08B1, func_move_0000005F5D4A0D19, func_update_0000005F5D4A0EF9, func_get position_0000005F5D4A1121, func_serializeCommon_0000005F5D4A1249, func_serializeForViewer_0000005F5D4A1419, func_serializeForPlayer_0000005F5D4A1581)
    a0["Threat"] = func_Threat_0000005F5D49E691
    return undefined
}
function func_serializeForPlayer_0000005F5D4A1581()
{
    r1 = this["serializeCommon"]
    r1 = r1()
    r0 = CloneObject(r1)
    r0["direction"] = this["_direction"]
    r0["personality"] = this["personality"]
    r1 = this["threatStyleHumanizedMap"]
    r0["style"] = r1[this["style"]]
    return r0
}
function func_serializeForViewer_0000005F5D4A1419()
{
    r1 = this["serializeCommon"]
    r1 = r1()
    r0 = CloneObject(r1)
    r0["direction"] = this["_direction"]
    r0["personality"] = this["personality"]
    r0["style"] = this["style"]
    return r0
}
function func_serializeCommon_0000005F5D4A1249()
{
    r0 = new {"position": null}
    r1 = new {"x": null, "y": null}
    r2 = this["_position"]
    r1["x"] = r2["x"]
    r2 = this["_position"]
    r1["y"] = r2["y"]
    r0["position"] = r1
    return r0
}
function func_get position_0000005F5D4A1121()
{
    return this["_position"]
}
function func_update_0000005F5D4A0EF9(a0)
{
    if (a0["tick"] > 900)
    {
        this["personality"] = "insane"
    }
    else
    {
        if (a0["tick"] > 700)
        {
            this["personality"] = "hungry"
        }
        else
        {
            if (a0["tick"] > 500)
            {
                this["personality"] = "awake"
            }
            else
            {
                if (a0["tick"] > 300)
                {
                    this["personality"] = "tease"
                }
            }
        }
    }
    this["nbOfTicksSinceLastMove"] = (this["nbOfTicksSinceLastMove"] + 1)
    r0 = this["nbOfTicksSinceLastMove"]
    r1 = this["tickSpeedMap"]
    if (r0 >= r1[this["personality"]])
    {
        this["nbOfTicksSinceLastMove"] = 0
        r0 = this["move"]
        ACCU = r0(a0)
    }
    return undefined
}
function func_move_0000005F5D4A0D19(a0)
{
    r0 = this["get_next_move"]
    r0 = r0(a0)
    switch ()
    case r0 === "up":
    {
        r1 = this["moveUp"]
        ACCU = r1()
        break
    }
    case r0 === "down":
    {
        r1 = this["moveDown"]
        ACCU = r1()
        break
    }
    case r0 === "left":
    {
        r1 = this["moveLeft"]
        ACCU = r1()
        break
    }
    case r0 === "right":
    {
        r1 = this["moveRight"]
        ACCU = r1()
    }
    default:
    {}
    return undefined
}
function func_getPossibleDirections_0000005F5D4A08B1()
{
    r7 = this["_position"]
    r0 = r7["x"]
    r7 = this["_position"]
    r1 = r7["y"]
    r2 = new ["left", "right", "up", "down"]
    r3 = []
    r8 = GetIterator(r2)
    r7 = r8["next"]
    ACCU = false
    r9 = false
    r12 = <context>
    try
    {
        while (true)
        {
            r9 = true
            r13 = r7()
            if (r13["done"]) break
            r9 = false
            ACCU = r13["value"] === "left"
            if (!r13["value"] === "left")
            {
                if (!r13["value"] === "right")
                {
                    if (!r13["value"] === "up")
                    {
                        if (!r13["value"] === "down")
                        {
                            continue
                            if (r0 > 0)
                            {
                                r15 = this["_map"]
                                r15 = r15[(r0 - 1)]
                                r15 = r15[r1]
                                if (r15 === 1)
                                {
                                    ACCU = r3["push"]("left")
                                    continue
                                    r16 = this["_map"]
                                    if (r0 < (r16["length"] - 1))
                                    {
                                        r15 = this["_map"]
                                        r15 = r15[(r0 + 1)]
                                        r15 = r15[r1]
                                        if (r15 === 1)
                                        {
                                            ACCU = r3["push"]("right")
                                            continue
                                            if (r1 > 0)
                                            {
                                                r15 = this["_map"]
                                                r15 = r15[r0]
                                                r15 = r15[(r1 - 1)]
                                                if (r15 === 1)
                                                {
                                                    ACCU = r3["push"]("up")
                                                    continue
                                                    r16 = this["_map"]
                                                    r16 = r16[0]
                                                    if (!r1 < (r16["length"] - 1)) continue
                                                    r15 = this["_map"]
                                                    r15 = r15[r0]
                                                    r15 = r15[(r1 + 1)]
                                                    if (!r15 === 1) continue
                                                    ACCU = r3["push"]("down")
                                                    continue
                                                }
                                                r11 = -1
                                                r10 = -1
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    catch
    {
        r11 = ACCU
        r10 = 0
    }
    if (!r9)
    {
        r14 = <context>
        try
        {
            if (!r8["return"] == undefined)
            {
                ACCU = r8["return"]()
            }
            catch {}
        }
    }
    ACCU = null
    if (r10 === 0)
    {
        ACCU = r11
    }
    return r3
}
function func_moveRight_0000005F5D4A0759()
{
    r0 = this["canMoveRight"]
    if (r0())
    {
        r1 = this["computeNewPositionAfterMove"]
        this["_position"] = r1("right")
        this["_direction"] = "right"
    }
    return undefined
}
function func_moveLeft_0000005F5D4A0601()
{
    r0 = this["canMoveLeft"]
    if (r0())
    {
        r1 = this["computeNewPositionAfterMove"]
        this["_position"] = r1("left")
        this["_direction"] = "left"
    }
    return undefined
}
function func_moveDown_0000005F5D4A04A9()
{
    r0 = this["canMoveDown"]
    if (r0())
    {
        r1 = this["computeNewPositionAfterMove"]
        this["_position"] = r1("down")
        this["_direction"] = "down"
    }
    return undefined
}
function func_moveUp_0000005F5D4A0351()
{
    r0 = this["canMoveUp"]
    if (r0())
    {
        r1 = this["computeNewPositionAfterMove"]
        this["_position"] = r1("up")
        this["_direction"] = "up"
    }
    return undefined
}
function func_computeNewPositionAfterMove_0000005F5D4A0009(a0)
{
    r0 = a0
    switch ()
    case a0 === "up":
    {
        r1 = new {"x": null, "y": null}
        r2 = this["_position"]
        r1["x"] = r2["x"]
        r2 = this["_position"]
        r1["y"] = (r2["y"] - 1)
        return r1
    }
    case r0 === "down":
    {
        r1 = new {"x": null, "y": null}
        r2 = this["_position"]
        r1["x"] = r2["x"]
        r2 = this["_position"]
        r1["y"] = (r2["y"] + 1)
        return r1
    }
    case r0 === "left":
    {
        r1 = new {"x": null, "y": null}
        r2 = this["_position"]
        r1["x"] = (r2["x"] - 1)
        r2 = this["_position"]
        r1["y"] = r2["y"]
        return r1
    }
    case r0 === "right":
    {
        r1 = new {"x": null, "y": null}
        r2 = this["_position"]
        r1["x"] = (r2["x"] + 1)
        r2 = this["_position"]
        r1["y"] = r2["y"]
        return r1
    }
    default:
    {}
    return undefined
}
function func_canMoveRight_0000005F5D49FE71()
{
    r0 = this["_position"]
    r1 = this["_map"]
    ACCU = r0["x"] < (r1["length"] - 1)
    if (r0["x"] < (r1["length"] - 1))
    {
        r0 = this["_map"]
        r1 = this["_position"]
        r0 = r0[(r1["x"] + 1)]
        r1 = this["_position"]
        r0 = r0[r1["y"]]
        ACCU = r0 === 1
    }
    return ACCU
}
function func_canMoveLeft_0000005F5D49FD01()
{
    r0 = this["_position"]
    ACCU = r0["x"] > 0
    if (r0["x"] > 0)
    {
        r0 = this["_map"]
        r1 = this["_position"]
        r0 = r0[(r1["x"] - 1)]
        r1 = this["_position"]
        r0 = r0[r1["y"]]
        ACCU = r0 === 1
    }
    return ACCU
}
function func_canMoveDown_0000005F5D49FB59()
{
    r0 = this["_position"]
    r1 = this["_map"]
    r2 = this["_position"]
    r1 = r1[r2["x"]]
    ACCU = r0["y"] < (r1["length"] - 1)
    if (r0["y"] < (r1["length"] - 1))
    {
        r0 = this["_map"]
        r1 = this["_position"]
        r0 = r0[r1["x"]]
        r1 = this["_position"]
        r0 = r0[(r1["y"] + 1)]
        ACCU = r0 === 1
    }
    return ACCU
}
function func_canMoveUp_0000005F5D49F9E9()
{
    r0 = this["_position"]
    ACCU = r0["y"] > 0
    if (r0["y"] > 0)
    {
        r0 = this["_map"]
        r1 = this["_position"]
        r0 = r0[r1["x"]]
        r1 = this["_position"]
        r0 = r0[(r1["y"] - 1)]
        ACCU = r0 === 1
    }
    return ACCU
}
function func_getRandomDirection_0000005F5D49F659(a0)
{
    r2 = Scope[0]
    Scope[1][2] = null
    ACCU = a0
    if (a0 == undefined)
    {
        ACCU = []
    }
    else
    {
        ACCU = a0
    }
    Scope[1][2] = ACCU
    r0 = new ["up", "down", "left", "right"]
    r0 = r0["filter"](func_unknown_0000005F5D49F849)
    r5 = this["randomNumber"]
    r5 = (r5 * r0["length"])
    r1 = "Math"["floor"](r5)
    return r0[r1]
}
function func_unknown_0000005F5D49F849(a0)
{
    return !Boolean(Scope[1][2]["includes"](a0))
}
function func_setCharacterPosition_0000005F5D49F549(a0)
{
    this["_characterPosition"] = a0
    return undefined
}
function func_get randomNumber_0000005F5D49F391()
{
    r4 = Number(this["_seed"])
    r5 = (Number(this["_seed"]) + 1)
    this["_seed"] = (Number(this["_seed"]) + 1)
    r0 = ("Math"["sin"](r4) * 10000)
    return (r0 - "Math"["floor"](r0))
}
function func_get characterPosition_0000005F5D49F261()
{
    return this["_characterPosition"]
}
function func_get map_0000005F5D49F141()
{
    return this["_map"]
}
function func_get direction_0000005F5D49F019()
{
    return this["_direction"]
}
function func_Threat_0000005F5D49E691(a0, a1, a2, a3)
{
    ACCU = <closure>
    r3 = supper
    ACCU = r0
    r4 = r3(r0)
    ACCU = this
    this = r4
    ACCU = this
    this["nbOfTicksSinceLastMove"] = 0
    ACCU = this
    this["personality"] = "lazy"
    ACCU = this
    this["style"] = "straitHead"
    ACCU = this
    this["oppositeDirections"] = new {"left": "right", "right": "left", "up": "down", "down": "up"}
    ACCU = this
    this["_seed"] = 0
    ACCU = this
    this["tickSpeedMap"] = new {"lazy": 5, "tease": 4, "awake": 3, "hungry": 2, "insane": 1}
    ACCU = this
    this["threatStyleHumanizedMap"] = new {"straitHead": "bull", "girouette": "goldfish", "aggressive": "shark", "surveillance": "owl", "le_fantome_orange_dans_pacman": "deer", "sheriff": "hawk"}
    ACCU = this
    this["_position"] = a1
    ACCU = this
    this["spawnPosition"] = a1
    ACCU = this
    r3 = this["getRandomDirection"]
    this["_direction"] = r3()
    ACCU = this
    this["personality"] = a2
    ACCU = this
    this["style"] = a3
    ACCU = this
    this["_map"] = a0
    ACCU = this
    this["_characterPosition"] = new {"x": -1, "y": -1}
    return this
}
