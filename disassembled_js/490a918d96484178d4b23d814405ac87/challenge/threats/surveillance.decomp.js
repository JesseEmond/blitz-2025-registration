function func_unknown()
{
    r0 = func_unknown_000003C66F25DD69
    return func_unknown_000003C66F25DD69
}
function func_unknown_000003C66F25DD69(a0, a1, a2, a3, a4)
{
    r2 = Scope[0]
    Scope[1][2] = null
    r7 = new {"value": true}
    r5 = a0
    ACCU = "Object"["defineProperty"](r5, "__esModule", r7)
    a0["SurveillanceThreat"] = undefined
    Scope[1][2] = a1("../geometry/vector")
    r0 = a1("./threat")
    r4 = DefineClass([7, DescriptorArray[4], NumberDictionary[7], [], DescriptorArray[5], NumberDictionary[7], []], func_SurveillanceThreat_000003C66F25E241, r0["Threat"], func_get_next_move_000003C66F25E4F9, func_getSurveillancePath_000003C66F25E6F1, func_isPlayerInDirectLineOfSight_000003C66F25EAA1, func_anyObstacleBetweenPoints_000003C66F25ECD1)
    a0["SurveillanceThreat"] = func_SurveillanceThreat_000003C66F25E241
    return undefined
}
function func_anyObstacleBetweenPoints_000003C66F25ECD1(a0, a1, a2, a3)
{
    if (a3 === "x")
    {
        r4 = a1["x"]
        r5 = a2["x"]
        r6 = a1["y"]
        r7 = "Math"["min"](a1["x"], a2["x"])
        while (true)
        {
            if (!r7 <= "Math"["max"](r4, r5)) break
            r8 = a0[r7]
            r8 = r8[r6]
            if (!r8 === 0) continue
            return true
            r7 = (r7 + 1)
        }
    }
    if (a3 === "y")
    {
        r0 = a1["y"]
        r1 = a2["y"]
        r2 = a1["x"]
        r3 = "Math"["min"](a1["y"], a2["y"])
        while (true)
        {
            if (!r3 <= "Math"["max"](r0, r1)) break
            r8 = a0[r2]
            r8 = r8[r3]
            if (!r8 === 0) continue
            return true
            r3 = (r3 + 1)
        }
    }
    return false
}
function func_isPlayerInDirectLineOfSight_000003C66F25EAA1(a0)
{
    r0 = Scope[1][2]["Vector"]["fromPosition"](a0["character"]["position"])
    r4 = this["position"]
    r1 = Scope[1][2]["Vector"]["fromPosition"](r4)
    if (r0["x"] === r1["x"])
    {
        r2 = this["anyObstacleBetweenPoints"]
        r4 = this["_grid"]
        r3 = this
        r5 = r1
        r6 = r0
        return r2(r4, r5, r6, "y")
    }
    if (r0["y"] === r1["y"])
    {
        r2 = this["anyObstacleBetweenPoints"]
        r4 = this["_grid"]
        r3 = this
        r5 = r1
        r6 = r0
        return r2(r4, r5, r6, "x")
    }
    return false
}
function func_getSurveillancePath_000003C66F25E6F1(a0)
{
    if (this["_lastTargetSeenPosition"] == null)
    {
        return null
    }
    r6 = this["position"]
    r4 = Scope[1][2]["Vector"]["fromPosition"](r6)
    r5 = this["_lastTargetSeenPosition"]
    r0 = a0["pathfindingGrid"]["getPath"](r4, r5)
    if (a0["pathfindingGrid"]["getPath"](r4, r5) == null)
    	|| (r0["length"] === 0)
    {
        ACCU = "console"["log"]("No path found")
        return null
    }
    r1 = r0[1]
    if (r0[1])
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
function func_get_next_move_000003C66F25E4F9(a0)
{
    r0 = (a0["tick"] % 60)
    if (r0 < 10)
    {
        this["_lastTargetSeenPosition"] = Scope[1][2]["Vector"]["fromPosition"](a0["character"]["position"])
    }
    r0 = this["getSurveillancePath"]
    return r0(a0)
}
function func_SurveillanceThreat_000003C66F25E241(a0, a1, a2, a3)
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
    ACCU = this
    this["_lastTargetSeenPosition"] = null
    ACCU = this
    this["_grid"] = a0
    return this
}
