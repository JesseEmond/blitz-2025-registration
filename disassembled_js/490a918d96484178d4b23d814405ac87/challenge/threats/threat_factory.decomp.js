function func_unknown()
{
    r0 = func_unknown_0000008D6EB1DD69
    return func_unknown_0000008D6EB1DD69
}
function func_unknown_0000008D6EB1DD69(a0, a1, a2, a3, a4)
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
    a0["createThreat"] = func_createThreat_0000008D6EB1E051
    Scope[1][2] = a1("./aggressive")
    Scope[1][3] = a1("./girouette")
    Scope[1][4] = a1("./sheriff")
    Scope[1][5] = a1("./straight_ahead_threat")
    Scope[1][6] = a1("./surveillance")
    Scope[1][7] = a1("./tse_le_fantome_orange_dans_pacman")
    return undefined
}
function func_createThreat_0000008D6EB1E051(a0, a1, a2, a3)
{
    r0 = a3
    switch ()
    case a3 === "straitHead":
    {
        ACCU = Scope[1][5]["StraightAheadThreat"]
        r2 = a0
        r3 = a1
        r4 = a2
        r5 = a3
        return Scope[1][5]["StraightAheadThreat"](r2, r3, r4, r5)
    }
    case r0 === "girouette":
    {
        ACCU = Scope[1][3]["GirouetteThreat"]
        r2 = a0
        r3 = a1
        r4 = a2
        r5 = a3
        return Scope[1][3]["GirouetteThreat"](r2, r3, r4, r5)
    }
    case r0 === "aggressive":
    {
        ACCU = Scope[1][2]["AggressiveThreat"]
        r2 = a0
        r3 = a1
        r4 = a2
        r5 = a3
        return Scope[1][2]["AggressiveThreat"](r2, r3, r4, r5)
    }
    case r0 === "surveillance":
    {
        ACCU = Scope[1][6]["SurveillanceThreat"]
        r2 = a0
        r3 = a1
        r4 = a2
        r5 = a3
        return Scope[1][6]["SurveillanceThreat"](r2, r3, r4, r5)
    }
    case r0 === "le_fantome_orange_dans_pacman":
    {
        ACCU = Scope[1][7]["LeFantomeOrangeDansPacmanThreat"]
        r2 = a0
        r3 = a1
        r4 = a2
        r5 = a3
        return Scope[1][7]["LeFantomeOrangeDansPacmanThreat"](r2, r3, r4, r5)
    }
    case r0 === "sheriff":
    {
        ACCU = Scope[1][4]["SheriffThreat"]
        r2 = a0
        r3 = a1
        r4 = a2
        r5 = a3
        return Scope[1][4]["SheriffThreat"](r2, r3, r4, r5)
    }
    default:
    {}
    ACCU = Scope[1][5]["StraightAheadThreat"]
    r1 = a0
    r2 = a1
    r3 = a2
    r4 = a3
    return Scope[1][5]["StraightAheadThreat"](r1, r2, r3, r4)
}
