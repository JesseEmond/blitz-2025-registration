function func_unknown()
{
    r0 = func_unknown_00000222A799DD69
    return func_unknown_00000222A799DD69
}
function func_unknown_00000222A799DD69(a0, a1, a2, a3, a4)
{
    r6 = new {"value": true}
    r4 = a0
    ACCU = "Object"["defineProperty"](r4, "__esModule", r6)
    a0["AggressiveThreat"] = undefined
    r0 = a1("./threat")
    r3 = DefineClass([5, DescriptorArray[4], NumberDictionary[7], [], DescriptorArray[3], NumberDictionary[7], []], func_AggressiveThreat_00000222A799E0E1, r0["Threat"], func_get_next_move_00000222A799E311, func_getAggressivePath_00000222A799E651)
    a0["AggressiveThreat"] = func_AggressiveThreat_00000222A799E0E1
    return undefined
}
function func_getAggressivePath_00000222A799E651(a0, a1, a2)
{
    r11 = Scope[0]
    Scope[1][2] = null
    Scope[1][2] = {}
    r0 = {}
    r1 = []
    r2 = undefined
    r3 = undefined
    r2 = 0
    while (true)
    {
        if (!r2 < a0["length"]) break
        Scope[1][2][r2] = {}
        r0[r2] = {}
        r3 = 0
        while (true)
        {
            r13 = a0[r2]
            if (!r3 < r13["length"]) continue
            Scope[1][2][r2][r3] = "Infinity"
            r12 = r0[r2]
            r12[r3] = null
            r12 = a0[r2]
            r12 = r12[r3]
            if (r12 === 0)
            {
                continue
            }
            r14 = new {"x": null, "y": null}
            r14["x"] = r2
            r14["y"] = r3
            ACCU = r1["push"](r14)
            r3 = (r3 + 1)
        }
        r2 = (r2 + 1)
    }
    Scope[1][2][a1["x"]][a1["y"]] = 0
    while (true)
    {
        if (!r1["length"] > 0) break
        ACCU = r1["sort"](func_unknown_00000222A799E9D1)
        r6 = r1["pop"]()
        r7 = new [{"x": -1, "y": 0}, {"x": 1, "y": 0}, {"x": 0, "y": -1}, {"x": 0, "y": 1}]
        r2 = 0
        while (true)
        {
            if (!r2 < r7["length"]) continue
            r13 = r7[r2]
            r8 = (r6["x"] + r13["x"])
            r13 = r7[r2]
            r9 = (r6["y"] + r13["y"])
            if (!r8 < 0)
            	&& (!r8 === a0["length"])
            	&& (!r9 < 0)
            r13 = a0[0]
            	&& (r9 === r13["length"])
            {
                continue
            }
            r12 = a0[r8]
            r12 = r12[r9]
            if (r12 === 0)
            {
                continue
            }
            if (!(Scope[1][2][r6["x"]][r6["y"]] + 1) < Scope[1][2][r8][r9]) continue
            Scope[1][2][r8][r9] = (Scope[1][2][r6["x"]][r6["y"]] + 1)
            r12 = r0[r8]
            r12[r9] = r6
            r2 = (r2 + 1)
        }
    }
    r4 = []
    r5 = a2
    ACCU = r5
    while (true)
    {
        r12 = r0[r5["x"]]
        if (r12[r5["y"]] == null) break
        ACCU = r4["unshift"](r5)
        r12 = r0[r5["x"]]
        r5 = r12[r5["y"]]
    }
    return r4
}
function func_unknown_00000222A799E9D1(a0, a1)
{
    return (Scope[1][2][a1["x"]][a1["y"]] - Scope[1][2][a0["x"]][a0["y"]])
}
function func_get_next_move_00000222A799E311(a0)
{
    r2 = this["getAggressivePath"]
    r4 = this["map"]
    r5 = new {"x": null, "y": null}
    r6 = this["position"]
    r5["x"] = r6["x"]
    r6 = this["position"]
    r5["y"] = r6["y"]
    r6 = this["characterPosition"]
    r3 = this
    r0 = r2(r4, r5, r6)
    r1 = r0[0]
    if (r0[0])
    {
        r3 = this["position"]
        if (r1["x"] > r3["x"])
        {
            return "right"
        }
        r3 = this["position"]
        if (r1["x"] < r3["x"])
        {
            return "left"
        }
        r3 = this["position"]
        if (r1["y"] > r3["y"])
        {
            return "down"
        }
        return "up"
    }
    return null
}
function func_AggressiveThreat_00000222A799E0E1(a0, a1, a2, a3)
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
