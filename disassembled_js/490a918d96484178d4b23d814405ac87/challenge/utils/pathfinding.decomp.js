function func_unknown()
{
    r0 = func_unknown_000002AC5D81DD69
    return func_unknown_000002AC5D81DD69
}
function func_unknown_000002AC5D81DD69(a0, a1, a2, a3, a4)
{
    r1 = Scope[0]
    Scope[1][2] = null
    Scope[1][3] = null
    r6 = new {"value": true}
    r4 = a0
    ACCU = "Object"["defineProperty"](r4, "__esModule", r6)
    a0["PathfindingGrid"] = undefined
    Scope[1][2] = a1("../geometry/vector")
    Scope[1][3] = -1
    r2 = Scope[1]
    Scope[2][2] = null
    r4 = DefineClass([10, DescriptorArray[5], NumberDictionary[7], [], DescriptorArray[7], NumberDictionary[7], []], func_PathfindingGrid_000002AC5D81E339, null, func_from2DArray_000002AC5D81E839, func_getPath_000002AC5D81E961, func_getDistances_000002AC5D81EEF9, func_internalGetDistances_000002AC5D81F0E1, func_isPositionValid_000002AC5D81F8E1, func_getNeighbours_000002AC5D81FA51, func_getNeighboursFast_000002AC5D81FF99)
    Scope[2][2] = func_PathfindingGrid_000002AC5D81E339
    a0["PathfindingGrid"] = Scope[1]
    return undefined
}
function func_getNeighboursFast_000002AC5D81FF99(a0, a1)
{
    if (!a0["x"] == 0)
    {
        r14 = (a0["x"] - 1)
        r16 = this["_grid"]
        r16 = r16[r14]
        r16 = r16[a0["y"]]
        if (r16 === 0)
        {
            a1[0] = r14
            a1[1] = a0["y"]
        }
        else
        {
            a1[0] = -1
            a1[1] = -1
        }
    }
    else
    {
        a1[0] = -1
        a1[1] = -1
    }
    if (a0["x"] < (this["_width"] - 1))
    {
        r12 = (a0["x"] + 1)
        r16 = this["_grid"]
        r16 = r16[r12]
        r16 = r16[a0["y"]]
        if (r16 === 0)
        {
            a1[2] = r12
            a1[3] = a0["y"]
        }
        else
        {
            a1[2] = -1
            a1[3] = -1
        }
    }
    else
    {
        a1[2] = -1
        a1[3] = -1
    }
    if (!a0["y"] == 0)
    {
        r11 = (a0["y"] - 1)
        r16 = this["_grid"]
        r16 = r16[a0["x"]]
        r16 = r16[r11]
        if (r16 === 0)
        {
            a1[4] = a0["x"]
            a1[5] = r11
        }
        else
        {
            a1[4] = -1
            a1[5] = -1
        }
    }
    else
    {
        a1[4] = -1
        a1[5] = -1
    }
    if (a0["y"] < (this["_height"] - 1))
    {
        r9 = (a0["y"] + 1)
        r16 = this["_grid"]
        r16 = r16[a0["x"]]
        r16 = r16[r9]
        if (r16 === 0)
        {
            a1[6] = a0["x"]
            a1[7] = r9
        }
        else
        {
            a1[6] = -1
            a1[7] = -1
        }
    }
    else
    {
        a1[6] = -1
        a1[7] = -1
    }
    if (!this["_withDiagonalMovement"])
    {
        return undefined
    }
    if (!a0["x"] == 0)
    	&& (!a0["y"] == 0)
    {
        r6 = (a0["x"] - 1)
        r7 = (a0["y"] - 1)
        r16 = this["_grid"]
        r16 = r16[r6]
        r16 = r16[r7]
        if (r16 === 0)
        {
            a1[8] = r6
            a1[9] = r7
        }
        else
        {
            a1[8] = -1
            a1[9] = -1
        }
    }
    else
    {
        a1[8] = -1
        a1[9] = -1
    }
    if (a0["x"] < (this["_width"] - 1))
    	&& (!a0["y"] == 0)
    {
        r4 = (a0["x"] + 1)
        r5 = (a0["y"] - 1)
        r16 = this["_grid"]
        r16 = r16[r4]
        r16 = r16[r5]
        if (r16 === 0)
        {
            a1[10] = r4
            a1[11] = r5
        }
        else
        {
            a1[10] = -1
            a1[11] = -1
        }
    }
    else
    {
        a1[10] = -1
        a1[11] = -1
    }
    if (!a0["x"] == 0)
    	&& (a0["y"] < (this["_height"] - 1))
    {
        r2 = (a0["x"] - 1)
        r3 = (a0["y"] + 1)
        r16 = this["_grid"]
        r16 = r16[r2]
        r16 = r16[r3]
        if (r16 === 0)
        {
            a1[12] = r2
            a1[13] = r3
        }
        else
        {
            a1[12] = -1
            a1[13] = -1
        }
    }
    else
    {
        a1[12] = -1
        a1[13] = -1
    }
    if (a0["x"] < (this["_width"] - 1))
    	&& (a0["y"] < (this["_height"] - 1))
    {
        r0 = (a0["x"] + 1)
        r1 = (a0["y"] + 1)
        r16 = this["_grid"]
        r16 = r16[r0]
        r16 = r16[r1]
        if (r16 === 0)
        {
            a1[14] = r0
            a1[15] = r1
        }
        else
        {
            a1[14] = -1
            a1[15] = -1
        }
    }
    else
    {
        a1[14] = -1
        a1[15] = -1
    }
    return undefined
}
function func_getNeighbours_000002AC5D81FA51(a0)
{
    r0 = Scope[2]
    Scope[3][2] = this
    r4 = new [0, 0, 0, 0]
    r6 = (a0["x"] - 1)
    ACCU = Scope[1][2]["Vector"]
    r4[0] = Scope[1][2]["Vector"](r6, a0["y"])
    r6 = (a0["x"] + 1)
    ACCU = Scope[1][2]["Vector"]
    r4[1] = Scope[1][2]["Vector"](r6, a0["y"])
    r7 = (a0["y"] - 1)
    ACCU = Scope[1][2]["Vector"]
    r4[2] = Scope[1][2]["Vector"](a0["x"], r7)
    r7 = (a0["y"] + 1)
    ACCU = Scope[1][2]["Vector"]
    r4[3] = Scope[1][2]["Vector"](a0["x"], r7)
    r2 = r4["filter"]
    r3 = r4
    r2 = r2(func_unknown_000002AC5D81FCA9)
    return r2["filter"](func_unknown_000002AC5D81FDC9)
}
function func_unknown_000002AC5D81FDC9(a0)
{
    return Scope[3][2]["_grid"][a0["x"]][a0["y"]] === 0
}
function func_unknown_000002AC5D81FCA9(a0)
{
    return Scope[3][2]["isPositionValid"](a0)
}
function func_isPositionValid_000002AC5D81F8E1(a0)
{
    ACCU = a0["x"] >= 0
    if (a0["x"] >= 0)
    {
        ACCU = a0["y"] >= 0
        if (a0["y"] >= 0)
        {
            if (a0["x"] < this["_width"])
            {
                ACCU = a0["y"] < this["_height"]
            }
        }
    }
    return ACCU
}
function func_internalGetDistances_000002AC5D81F0E1(a0)
{
    r3 = Scope[2]
    Scope[4][2] = null
    Scope[4][3] = null
    Scope[4][4] = null
    r1 = func_pushNeighbourIfPossible_000002AC5D81F481
    r6 = this["_width"]
    r6 = (r6 * this["_height"])
    ACCU = "Int32Array"
    r5 = "Int32Array"(r6)
    Scope[4][2] = r5["fill"](Scope[1][3])
    r5 = new [0]
    r6 = new {"position": null, "distance": 0}
    r6["position"] = a0
    r5[0] = r6
    Scope[4][3] = r5
    ACCU = "Int32Array"
    r0 = "Int32Array"(16)
    Scope[4][4] = this["_width"]
    while (true)
    {
        if (!Scope[4][3]["length"] > 0) break
        r2 = Scope[4][3]["shift"]()
        r5 = (r2["position"]["y"] * this["_width"])
        if (!Scope[4][2][(r5 + r2["position"]["x"])] === Scope[1][3])
        {
            continue
        }
        r5 = (r2["position"]["y"] * this["_width"])
        r5 = (r5 + r2["position"]["x"])
        Scope[4][2][r5] = r2["distance"]
        r4 = this["getNeighboursFast"]
        ACCU = r4(r2["position"], r0)
        r5 = r0[0]
        r6 = r0[1]
        r7 = (r2["distance"] + 1)
        ACCU = r1(r5, r6, r7)
        r5 = r0[2]
        r6 = r0[3]
        r7 = (r2["distance"] + 1)
        ACCU = r1(r5, r6, r7)
        r5 = r0[4]
        r6 = r0[5]
        r7 = (r2["distance"] + 1)
        ACCU = r1(r5, r6, r7)
        r5 = r0[6]
        r6 = r0[7]
        r7 = (r2["distance"] + 1)
        ACCU = r1(r5, r6, r7)
        if (!this["_withDiagonalMovement"]) continue
        r5 = r0[8]
        r6 = r0[9]
        r7 = (r2["distance"] + 1)
        ACCU = r1(r5, r6, r7)
        r5 = r0[10]
        r6 = r0[11]
        r7 = (r2["distance"] + 1)
        ACCU = r1(r5, r6, r7)
        r5 = r0[12]
        r6 = r0[13]
        r7 = (r2["distance"] + 1)
        ACCU = r1(r5, r6, r7)
        r5 = r0[14]
        r6 = r0[15]
        r7 = (r2["distance"] + 1)
        ACCU = r1(r5, r6, r7)
    }
    return Scope[4][2]
}
function func_pushNeighbourIfPossible_000002AC5D81F481(a0, a1, a2)
{
    if (a0 >= 0)
    {
        if (a1 >= 0)
        {
            r1 = (a1 * Scope[4][4])
            if (Scope[4][2][(r1 + a0)] === Scope[1][3])
            {
                r2 = new {"position": null, "distance": null}
                ACCU = Scope[1][2]["Vector"]
                r4 = a0
                r5 = a1
                r2["position"] = Scope[1][2]["Vector"](r4, r5)
                r2["distance"] = a2
                ACCU = Scope[4][3]["push"](r2)
            }
        }
    }
    return undefined
}
function func_getDistances_000002AC5D81EEF9(a0)
{
    r5 = this["internalGetDistances"]
    r0 = r5(a0)
    r1 = []
    r2 = 0
    while (true)
    {
        if (!r2 < this["_width"]) break
        r1[r2] = []
        r3 = 0
        while (true)
        {
            if (!r3 < this["_height"]) continue
            r6 = (r3 * this["_width"])
            r4 = r0[(r6 + r2)]
            r5 = r1[r2]
            r6 = r3
            if (r4 === Scope[1][3])
            {
                ACCU = "Infinity"
                continue
            }
            r5[r6] = r4
            r3 = (r3 + 1)
        }
        r2 = (r2 + 1)
    }
    return r1
}
function func_getPath_000002AC5D81E961(a0, a1)
{
    r4 = Scope[2]
    Scope[5][2] = this
    Scope[5][3] = null
    Scope[5][4] = null
    if (!Scope[5][2]["isPositionValid"](a0))
    	|| (!Scope[5][2]["isPositionValid"](a1))
    {
        return null
    }
    if (!Scope[5][2]["_grid"][a0["x"]][a0["y"]] === 0)
    	|| (!Scope[5][2]["_grid"][a1["x"]][a1["y"]] === 0)
    {
        return null
    }
    Scope[5][3] = Scope[5][2]["internalGetDistances"](a1)
    r6 = (a0["y"] * Scope[5][2]["_width"])
    if (Scope[5][3][(r6 + a0["x"])] === -1)
    {
        return null
    }
    r6 = new [0]
    r6[0] = a0
    r0 = r6
    r1 = a0
    r6 = (r1["y"] * Scope[5][2]["_width"])
    Scope[5][4] = Scope[5][3][(r6 + r1["x"])]
    while (true)
    {
        if (r1["equals"](a1)) break
        r2 = Scope[5][2]["getNeighbours"](r1)
        r3 = r2["find"](func_unknown_000002AC5D81EC91)
        ACCU = r0["push"](r3)
        r1 = r3
        Scope[5][4] = (Scope[5][4] - 1)
    }
    return r0
}
function func_unknown_000002AC5D81EC91(a0)
{
    r1 = (a0["y"] * Scope[5][2]["_width"])
    return Scope[5][3][(r1 + a0["x"])] === (Scope[5][4] - 1)
}
function func_from2DArray_000002AC5D81E839(a0, a1)
{
    ACCU = a1
    r1 = a0
    if (!a1 == undefined)
    {
        ACCU = false
    }
    r2 = ACCU
    ACCU = Scope[2][2]
    return Scope[2][2](r1, r2)
}
function func_PathfindingGrid_000002AC5D81E339(a0, a1)
{
    r0 = Scope[2]
    Scope[6][2] = this
    Scope[6][2]["_grid"] = a0
    Scope[6][2]["_withDiagonalMovement"] = a1
    Scope[6][2]["_width"] = Scope[6][2]["_grid"]["length"]
    if (Scope[6][2]["_width"] === 0)
    {
        ACCU = "Error"
        ACCU = "Error"("Grid is empty")
    }
    Scope[6][2]["_height"] = Scope[6][2]["_grid"][0]["length"]
    switch ()
    case Scope[6][2]["_grid"]["find"](func_unknown_000002AC5D81E5B1):
    {
        if (!false) break
    }
    case Scope[6][2]["_grid"]["find"](func_unknown_000002AC5D81E5B1):
    {
        ACCU = "Error"
        ACCU = "Error"("Grid is not rectangular")
    }
    default:
    {}
    return undefined
}
function func_unknown_000002AC5D81E5B1(a0)
{
    return !(a0["length"] === Scope[6][2]["_height"])
}
