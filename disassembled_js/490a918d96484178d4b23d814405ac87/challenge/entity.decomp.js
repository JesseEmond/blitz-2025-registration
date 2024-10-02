function func_unknown()
{
    r0 = func_unknown_000003D676A1DD69
    return func_unknown_000003D676A1DD69
}
function func_unknown_000003D676A1DD69(a0, a1, a2, a3, a4)
{
    r5 = new {"value": true}
    r3 = a0
    ACCU = "Object"["defineProperty"](r3, "__esModule", r5)
    a0["Entity"] = undefined
    r1 = Scope[0]
    Scope[1][2] = null
    r3 = DefineClass([5, DescriptorArray[5], NumberDictionary[7], [], DescriptorArray[2], NumberDictionary[7], []], func_Entity_000003D676A1E0E1, null, func_serialize_000003D676A1E319, func_generate_id_000003D676A1E469)
    Scope[1][2] = func_Entity_000003D676A1E0E1
    a0["Entity"] = Scope[0]
    Scope[0]["id_index"] = 1
    return undefined
}
function func_generate_id_000003D676A1E469()
{
    r2 = Number(Scope[1][2]["id_index"])
    r3 = (Number(Scope[1][2]["id_index"]) + 1)
    Scope[1][2]["id_index"] = (Number(Scope[1][2]["id_index"]) + 1)
    return r2["toString"]()
}
function func_serialize_000003D676A1E319()
{
    r0 = new {"id": null}
    r0["id"] = this["id"]
    return r0
}
function func_Entity_000003D676A1E0E1()
{
    this["id"] = Scope[1][2]["generate_id"]()
    return undefined
}
