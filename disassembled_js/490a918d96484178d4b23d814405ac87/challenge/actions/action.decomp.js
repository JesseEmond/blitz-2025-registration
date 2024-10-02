function func_unknown()
{
    r0 = func_unknown_00000251A459DD69
    return func_unknown_00000251A459DD69
}
function func_unknown_00000251A459DD69(a0, a1, a2, a3, a4)
{
    r1 = Scope[0]
    Scope[1][2] = null
    Scope[1][3] = null
    r6 = new {"value": true}
    r4 = a0
    ACCU = "Object"["defineProperty"](r4, "__esModule", r6)
    a0["ActionFactory"] = func_ActionFactory_00000251A459DF19
    Scope[1][2] = a1("../geometry/vector")
    Scope[1][3] = a1("./action_types")
    return undefined
}
function func_ActionFactory_00000251A459DF19(a0)
{
    if (!typeof(a0["type"]) == string)
    	|| (a0["type"]["length"] === 0)
    {
        r1 = ("invalid action type" + String(a0["type"]))
        ACCU = "Error"
        ACCU = "Error"(r1)
    }
    switch ()
    case a0["type"] === Scope[1][3]["ActionType"]["MOVE_LEFT"]:
    {
        r1 = new {"type": null}
        r1["type"] = Scope[1][3]["ActionType"]["MOVE_LEFT"]
        return r1
    }
    case a0["type"] === Scope[1][3]["ActionType"]["MOVE_RIGHT"]:
    {
        r1 = new {"type": null}
        r1["type"] = Scope[1][3]["ActionType"]["MOVE_RIGHT"]
        return r1
    }
    case a0["type"] === Scope[1][3]["ActionType"]["MOVE_UP"]:
    {
        r1 = new {"type": null}
        r1["type"] = Scope[1][3]["ActionType"]["MOVE_UP"]
        return r1
    }
    case a0["type"] === Scope[1][3]["ActionType"]["MOVE_DOWN"]:
    {
        r1 = new {"type": null}
        r1["type"] = Scope[1][3]["ActionType"]["MOVE_DOWN"]
        return r1
    }
    case a0["type"] === Scope[1][3]["ActionType"]["MOVE_TO"]:
    {
        r1 = new {"type": null, "position": null}
        r1["type"] = Scope[1][3]["ActionType"]["MOVE_TO"]
        r1["position"] = Scope[1][2]["Vector"]["fromPosition"](a0["position"])
        return r1
    }
    default:
    {}
    r2 = ("invalid action type" + String(a0["type"]))
    ACCU = "Error"
    ACCU = "Error"(r2)
}
