function func_unknown()
{
    r0 = func_unknown_0000010F8D29DD69
    return func_unknown_0000010F8D29DD69
}
function func_unknown_0000010F8D29DD69(a0, a1, a2, a3, a4)
{
    r6 = new {"value": true}
    r4 = a0
    ACCU = "Object"["defineProperty"](r4, "__esModule", r6)
    a0["GirouetteThreat"] = undefined
    r0 = a1("./threat")
    r3 = DefineClass([4, DescriptorArray[4], NumberDictionary[7], [], DescriptorArray[2], NumberDictionary[7], []], func_GirouetteThreat_0000010F8D29E091, r0["Threat"], func_get_next_move_0000010F8D29E2A9)
    a0["GirouetteThreat"] = func_GirouetteThreat_0000010F8D29E091
    return undefined
}
function func_get_next_move_0000010F8D29E2A9(a0)
{
    r1 = this["getPossibleDirections"]
    r0 = r1()
    r4 = this["randomNumber"]
    r4 = (r4 * r0["length"])
    return r0["Math"["floor"](r4)]
}
function func_GirouetteThreat_0000010F8D29E091(a0, a1, a2, a3)
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
