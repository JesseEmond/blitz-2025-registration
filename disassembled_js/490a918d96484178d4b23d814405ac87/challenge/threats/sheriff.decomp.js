function func_unknown()
{
    r0 = func_unknown_00000343ED31DD69
    return func_unknown_00000343ED31DD69
}
function func_unknown_00000343ED31DD69(a0, a1, a2, a3, a4)
{
    r2 = Scope[0]
    Scope[1][2] = null
    r7 = new {"value": true}
    r5 = a0
    ACCU = "Object"["defineProperty"](r5, "__esModule", r7)
    a0["SheriffThreat"] = undefined
    Scope[1][2] = a1("../geometry/vector")
    r0 = a1("./threat")
    r4 = DefineClass([11, DescriptorArray[4], NumberDictionary[7], [], DescriptorArray[9], NumberDictionary[7], []], func_SheriffThreat_00000343ED31E359, r0["Threat"], func_get_next_move_00000343ED31E701, func_getNextDirectionInPath_00000343ED31EAB9, func_isPlayerInDirectLineOfSight_00000343ED31EE21, func_anyObstacleBetweenPoints_00000343ED31F031, func_getRandomIntersection_00000343ED31F2D9, func_computeBestIntersection_00000343ED31F471, func_getIntersections_00000343ED31F769, func_getRowLength_00000343ED31FC19)
    a0["SheriffThreat"] = func_SheriffThreat_00000343ED31E359
    return undefined
}
function func_getRowLength_00000343ED31FC19(a0)
{
    r1 = a0["y"]
    r2 = 0
    r6 = (a0["y"] - 1)
    while (true)
    {
        if (!r6 >= 0) break
        r7 = this["_grid"]
        r7 = r7[r0]
        r7 = r7[r6]
        if (r7 === 1)
        {
            r2 = (r2 + 1)
            continue
        }
        break
        r6 = (r6 - 1)
    }
    r5 = (a0["y"] + 1)
    while (true)
    {
        r8 = this["_grid"]
        r8 = r8[r0]
        if (!r5 < r8["length"]) break
        r7 = this["_grid"]
        r7 = r7[r0]
        r7 = r7[r5]
        if (r7 === 1)
        {
            r2 = (r2 + 1)
            continue
        }
        break
        r5 = (r5 + 1)
    }
    r4 = (a0["x"] - 1)
    while (true)
    {
        if (!r4 >= 0) break
        r7 = this["_grid"]
        r7 = r7[r4]
        r7 = r7[r1]
        if (r7 === 1)
        {
            r2 = (r2 + 1)
            continue
        }
        break
        r4 = (r4 - 1)
    }
    r3 = (a0["x"] + 1)
    while (true)
    {
        r8 = this["_grid"]
        if (!r3 < r8["length"]) break
        r7 = this["_grid"]
        r7 = r7[r3]
        r7 = r7[r1]
        if (r7 === 1)
        {
            r2 = (r2 + 1)
            continue
        }
        break
        r3 = (r3 + 1)
    }
    return r2
}
function func_getIntersections_00000343ED31F769(a0)
{
    r0 = []
    r7 = 1
    r4 = 1
    r5 = 1
    while (true)
    {
        r8 = r4
        if (r5 == 1)
        {
            r5 = 0
        }
        else
        {
            r8 = (r8 + 1)
        }
        r6 = 1
        if (r8 < (a0["length"] - 1))
        {
            break
        }
        while (true)
        {
            if (!r6 == 1) continue
            r9 = 1
            r1 = 1
            r2 = 1
            while (true)
            {
                r10 = r1
                if (r2 == 1)
                {
                    r2 = 0
                }
                else
                {
                    r10 = (r10 + 1)
                }
                r3 = 1
                r14 = a0[r8]
                if (r10 < (r14["length"] - 1))
                {
                    continue
                }
                while (true)
                {
                    if (!r3 == 1) continue
                    r13 = a0[r8]
                    r13 = r13[r10]
                    if (!r13 === 1) continue
                    r14 = new [0, 0, 0, 0]
                    r15 = a0[(r8 - 1)]
                    r14[0] = r15[r10]
                    r15 = a0[(r8 + 1)]
                    r14[1] = r15[r10]
                    r15 = a0[r8]
                    r14[2] = r15[(r10 - 1)]
                    r15 = a0[r8]
                    r14[3] = r15[(r10 + 1)]
                    r11 = r14
                    r13 = r14["filter"](func_unknown_00000343ED31F9E9)
                    if (!r13["length"] >= 3) continue
                    ACCU = Scope[1][2]["Vector"]
                    r16 = r8
                    r17 = r10
                    r15 = Scope[1][2]["Vector"](r16, r17)
                    ACCU = r0["push"](r15)
                    r3 = 0
                    r1 = r10
                    ACCU = r1
                }
                if (!r3 == 1) continue
                continue
            }
            r6 = 0
            r4 = r8
            ACCU = r4
        }
        if (!r6 == 1) continue
        break
    }
    return r0
}
function func_unknown_00000343ED31F9E9(a0)
{
    return a0 === 1
}
function func_computeBestIntersection_00000343ED31F471(a0)
{
    r1 = Scope[1]
    Scope[2][2] = this
    r0 = Scope[2][2]["getIntersections"](a0)
    ACCU = r0["sort"](func_unknown_00000343ED31F5C9)
    return r0["slice"](0, 10)
}
function func_unknown_00000343ED31F5C9(a0, a1)
{
    r0 = Scope[2][2]["getRowLength"](a0)
    r1 = Scope[2][2]["getRowLength"](a1)
    return (r1 - r0)
}
function func_getRandomIntersection_00000343ED31F2D9()
{
    r0 = this["_bestIntersections"]
    r3 = this["randomNumber"]
    r4 = this["_bestIntersections"]
    r3 = (r3 * r4["length"])
    return r0["Math"["floor"](r3)]
}
function func_anyObstacleBetweenPoints_00000343ED31F031(a0, a1, a2)
{
    if (a2 === "x")
    {
        r4 = a0["x"]
        r5 = a1["x"]
        r6 = a0["y"]
        r7 = "Math"["min"](a0["x"], a1["x"])
        while (true)
        {
            if (!r7 <= "Math"["max"](r4, r5)) break
            r8 = this["_grid"]
            r8 = r8[r7]
            r8 = r8[r6]
            if (!r8 === 0) continue
            return true
            r7 = (r7 + 1)
        }
    }
    if (a2 === "y")
    {
        r0 = a0["y"]
        r1 = a1["y"]
        r2 = a0["x"]
        r3 = "Math"["min"](a0["y"], a1["y"])
        while (true)
        {
            if (!r3 <= "Math"["max"](r0, r1)) break
            r8 = this["_grid"]
            r8 = r8[r2]
            r8 = r8[r3]
            if (!r8 === 0) continue
            return true
            r3 = (r3 + 1)
        }
    }
    return false
}
function func_isPlayerInDirectLineOfSight_00000343ED31EE21(a0)
{
    r0 = Scope[1][2]["Vector"]["fromPosition"](a0["character"]["position"])
    r4 = this["position"]
    r1 = Scope[1][2]["Vector"]["fromPosition"](r4)
    if (r0["x"] === r1["x"])
    {
        r2 = this["anyObstacleBetweenPoints"]
        r3 = this
        r4 = r1
        r5 = r0
        return !Boolean(r2(r4, r5, "y"))
    }
    if (r0["y"] === r1["y"])
    {
        r2 = this["anyObstacleBetweenPoints"]
        r3 = this
        r4 = r1
        r5 = r0
        return !Boolean(r2(r4, r5, "x"))
    }
    return false
}
function func_getNextDirectionInPath_00000343ED31EAB9(a0, a1)
{
    r6 = this["position"]
    r4 = Scope[1][2]["Vector"]["fromPosition"](r6)
    r0 = a0["pathfindingGrid"]["getPath"](r4, a1)
    if (a0["pathfindingGrid"]["getPath"](r4, a1) == null)
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
function func_get_next_move_00000343ED31E701(a0)
{
    r2 = this["isPlayerInDirectLineOfSight"]
    if (r2(a0))
    {
        this["_lastTargetSeenPosition"] = Scope[1][2]["Vector"]["fromPosition"](a0["character"]["position"])
        this["_idlePosition"] = null
        this["_idleRounds"] = 0
    }
    if (!this["_lastTargetSeenPosition"] == null)
    {
        r2 = this["position"]
        r3 = this["_lastTargetSeenPosition"]
        if (r2["x"] === r3["x"])
        {
            r2 = this["position"]
            r3 = this["_lastTargetSeenPosition"]
            if (r2["y"] === r3["y"])
            {
                this["_lastTargetSeenPosition"] = null
                this["_idleRounds"] = 0
                return null
            }
        }
        r2 = this["getNextDirectionInPath"]
        r5 = this["_lastTargetSeenPosition"]
        return r2(a0, r5)
    }
    if (!this["_idlePosition"] == null)
    {
        r2 = this["position"]
        r3 = this["_idlePosition"]
        if (r2["x"] === r3["x"])
        {
            r2 = this["position"]
            r3 = this["_idlePosition"]
            if (r2["y"] === r3["y"])
            {
                this["_idlePosition"] = null
                this["_idleRounds"] = -5
                return null
            }
        }
        r2 = this["getNextDirectionInPath"]
        r5 = this["_idlePosition"]
        r1 = r2(a0, r5)
        return r2(a0, r5)
    }
    r3 = (this["_idleRounds"] + 1)
    this["_idleRounds"] = (this["_idleRounds"] + 1)
    if (r3 > 5)
    {
        r2 = this["getRandomIntersection"]
        r0 = r2()
        this["_idlePosition"] = r0
        this["_idleRounds"] = 0
    }
    return null
}
function func_SheriffThreat_00000343ED31E359(a0, a1, a2, a3)
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
    this["_idlePosition"] = null
    ACCU = this
    this["_idleRounds"] = 0
    ACCU = this
    this["_grid"] = a0
    ACCU = this
    r3 = this["computeBestIntersection"]
    this["_bestIntersections"] = r3(a0)
    return this
}
