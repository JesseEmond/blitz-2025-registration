function func_unknown()
{
    r0 = func_unknown_000002FFC6D1DD69
    return func_unknown_000002FFC6D1DD69
}
function func_unknown_000002FFC6D1DD69(a0, a1, a2, a3, a4)
{
    r0 = Scope[0]
    r5 = new {"value": true}
    r3 = a0
    ACCU = "Object"["defineProperty"](r3, "__esModule", r5)
    a0["ActionType"] = undefined
    Scope[1][2] = a1("../generated/GameInterface")
    r5 = new {"enumerable": true, "get": null}
    r5["get"] = func_get_000002FFC6D1DFD1
    r3 = a0
    ACCU = "Object"["defineProperty"](r3, "ActionType", r5)
    return undefined
}
function func_get_000002FFC6D1DFD1()
{
    return Scope[1][2]["ActionType"]
}
