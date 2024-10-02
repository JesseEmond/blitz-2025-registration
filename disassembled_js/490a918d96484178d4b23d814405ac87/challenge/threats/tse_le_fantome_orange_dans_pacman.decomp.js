function func_unknown()
{
    r0 = func_unknown_00000093A145DD69
    return func_unknown_00000093A145DD69
}
function func_unknown_00000093A145DD69(a0, a1, a2, a3, a4)
{
    r6 = new {"value": true}
    r4 = a0
    ACCU = "Object"["defineProperty"](r4, "__esModule", r6)
    a0["LeFantomeOrangeDansPacmanThreat"] = undefined
    r0 = a1("./threat")
    r3 = DefineClass([5, DescriptorArray[4], NumberDictionary[7], [], DescriptorArray[3], NumberDictionary[7], []], func_LeFantomeOrangeDansPacmanThreat_00000093A145E0F1, r0["Threat"], func_get_next_move_00000093A145E339, func_getSquaredDistance_00000093A145E971)
    a0["LeFantomeOrangeDansPacmanThreat"] = func_LeFantomeOrangeDansPacmanThreat_00000093A145E0F1
    return undefined
}
function func_getSquaredDistance_00000093A145E971(a0, a1)
{
    r2 = (a0["x"] - a1["x"])
    r0 = "Math"["pow"](r2, 2)
    r3 = (a0["y"] - a1["y"])
    return (r0 + "Math"["pow"](r3, 2))
}
function func_get_next_move_00000093A145E339()
{
    r3 = Scope[0]
    Scope[1][2] = this
    Scope[1][3] = null
    r0 = Scope[1][2]["getPossibleDirections"]()
    if (r0["length"] === 1)
    {
        return r0[0]
    }
    r1 = r0["filter"](func_unknown_00000093A145E571)
    Scope[1][3] = Scope[1][2]["characterPosition"]
    r4 = Scope[1][2]["getSquaredDistance"](Scope[1][2]["position"], Scope[1][2]["characterPosition"])
    if (r4 > (6 * 6))
    {
        Scope[1][3] = Scope[1][2]["characterPosition"]
    }
    else
    {
        Scope[1][3] = Scope[1][2]["spawnPosition"]
    }
    r4 = r1["sort"](func_unknown_00000093A145E729)
    return r4[0]
}
function func_unknown_00000093A145E729(a0, a1)
{
    r4 = Scope[1][2]["computeNewPositionAfterMove"](a0)
    r0 = Scope[1][2]["getSquaredDistance"](r4, Scope[1][3])
    r4 = Scope[1][2]["computeNewPositionAfterMove"](a1)
    r1 = Scope[1][2]["getSquaredDistance"](r4, Scope[1][3])
    return (r0 - r1)
}
function func_unknown_00000093A145E571(a0)
{
    return !(a0 === Scope[1][2]["oppositeDirections"][Scope[1][2]["direction"]])
}
function func_LeFantomeOrangeDansPacmanThreat_00000093A145E0F1(a0, a1, a2, a3)
{
    ACCU = <closure>
    r3 = supper
    ACCU = r0
    r4 = a0
    r5 = a1
    r6 = a2
    r7 = a3
    r8 = r3(r4, r5, r6, r7)
    ACCU = this
    this = r8
    return this
}
