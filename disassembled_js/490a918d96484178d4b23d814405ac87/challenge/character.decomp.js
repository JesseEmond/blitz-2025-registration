function func_unknown()
{
    r0 = func_unknown_0000037B4ED5DD69
    return func_unknown_0000037B4ED5DD69
}
function func_unknown_0000037B4ED5DD69(a0, a1, a2, a3, a4)
{
    r2 = Scope[0]
    Scope[1][2] = func_getHumanReadableDirection_0000037B4ED5DF89
    r7 = new {"value": true}
    r5 = a0
    ACCU = "Object"["defineProperty"](r5, "__esModule", r7)
    a0["Character"] = undefined
    r0 = a1("./entity")
    r3 = Scope[1]
    Scope[2][2] = null
    r5 = DefineClass([10, DescriptorArray[5], NumberDictionary[7], [], DescriptorArray[7], NumberDictionary[7], []], func_Character_0000037B4ED5E3A9, r0["Entity"], func_createFreshPlayerCommandsFlags_0000037B4ED5E6F1, func_get teamId_0000037B4ED5E881, func_get position_0000037B4ED5E9B1, func_update_0000037B4ED5EAE1, func_move_0000037B4ED5EC31, func_serializeForViewer_0000037B4ED5EDC9, func_serializeForPlayer_0000037B4ED5EFA9)
    Scope[2][2] = func_Character_0000037B4ED5E3A9
    a0["Character"] = Scope[1]
    return undefined
}
function func_serializeForPlayer_0000037B4ED5EFA9()
{
    r0 = new {"id": null, "teamId": null, "position": null, "alive": null, "spawnPoint": null}
    r0["id"] = this["id"]
    r0["teamId"] = this["teamId"]
    r2 = this["_position"]
    r0["position"] = r2["serialize"]()
    r0["alive"] = this["alive"]
    r2 = this["spawnPoint"]
    r0["spawnPoint"] = r2["serialize"]()
    return r0
}
function func_serializeForViewer_0000037B4ED5EDC9()
{
    r1 = this["serializeForPlayer"]
    r1 = r1()
    r0 = CloneObject(r1)
    ACCU = this["_direction"]
    r3 = this["_direction"]
    if (!this["_direction"] == undefined)
    {
        ACCU = r3["serialize"]()
    }
    else
    {
        ACCU = undefined
    }
    r2 = ACCU
    r0["direction"] = Scope[1][2](r2)
    return r0
}
function func_move_0000037B4ED5EC31(a0, a1)
{
    r0 = this["playerCommandsFlags"]
    if (r0["hasMoved"])
    {
        return undefined
    }
    if (!this["alive"])
    {
        return undefined
    }
    this["_position"] = a0
    this["_direction"] = a1
    r0 = this["playerCommandsFlags"]
    r0["hasMoved"] = true
    return undefined
}
function func_update_0000037B4ED5EAE1()
{
    this["playerCommandsFlags"] = Scope[2][2]["createFreshPlayerCommandsFlags"]()
    return undefined
}
function func_get position_0000037B4ED5E9B1()
{
    return this["_position"]
}
function func_get teamId_0000037B4ED5E881()
{
    return this["_teamId"]
}
function func_createFreshPlayerCommandsFlags_0000037B4ED5E6F1()
{
    return new {"hasMoved": false, "hasGrabbedOrDroppedPellet": false}
}
function func_Character_0000037B4ED5E3A9(a0, a1, a2)
{
    ACCU = <closure>
    r3 = supper
    ACCU = r0
    r4 = r3(r0)
    ACCU = this
    this = r4
    ACCU = this
    this["options"] = a0
    ACCU = this
    this["playerCommandsFlags"] = Scope[2][2]["createFreshPlayerCommandsFlags"]()
    ACCU = this
    this["_teamId"] = a1
    ACCU = this
    this["_position"] = a2
    ACCU = this
    this["_direction"] = null
    ACCU = this
    this["spawnPoint"] = a2
    ACCU = this
    this["alive"] = true
    return this
}
function func_getHumanReadableDirection_0000037B4ED5DF89(a0)
{
    if (!a0)
    {
        return "up"
    }
    r1 = ("Math"["atan2"](a0["y"], a0["x"]) * 180)
    r0 = (r1 / "Math"["PI"])
    if (r0 < 0)
    {
        r0 = (r0 + 360)
    }
    if (r0 >= 45)
    {
        if (r0 < 135)
        {
            return "up"
        }
    }
    if (r0 >= 135)
    {
        if (r0 < 225)
        {
            return "left"
        }
    }
    if (r0 >= 225)
    {
        if (r0 < 315)
        {
            return "down"
        }
    }
    return "right"
}
