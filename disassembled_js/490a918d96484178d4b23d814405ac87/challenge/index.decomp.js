function func_unknown()
{
    r0 = func_unknown_000003CEC719DD69
    return func_unknown_000003CEC719DD69
}
function func_unknown_000003CEC719DD69(a0, a1, a2, a3, a4)
{
    r0 = Scope[0]
    r5 = new {"value": true}
    r3 = a0
    ACCU = "Object"["defineProperty"](r3, "__esModule", r5)
    r3 = undefined
    a0["Blitz2025Challenge"] = undefined
    a0["MapLoader"] = r3
    Scope[1][2] = a1("./game")
    r5 = new {"enumerable": true, "get": null}
    r5["get"] = func_get_000003CEC719E059
    r3 = a0
    ACCU = "Object"["defineProperty"](r3, "Blitz2025Challenge", r5)
    Scope[1][3] = a1("./maps/map_loader")
    r5 = new {"enumerable": true, "get": null}
    r5["get"] = func_get_000003CEC719E269
    r3 = a0
    ACCU = "Object"["defineProperty"](r3, "MapLoader", r5)
    return undefined
}
function func_get_000003CEC719E269()
{
    return Scope[1][3]["MapLoader"]
}
function func_get_000003CEC719E059()
{
    return Scope[1][2]["Blitz2025Challenge"]
}
